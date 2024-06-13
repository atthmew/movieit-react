import { useRef, useState } from 'react';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// layouts
import RootLayout from './layouts/RootLayout';

// pages
import Home from './pages/Home';
import WatchList from './pages/WatchList';
import MovieDetails, { movieDetailLoader } from './pages/MovieDetails';
import MovieDetailsWL from './pages/MovieDetails_WL';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path=":id" element={<MovieDetails />} loader={movieDetailLoader} />
			<Route path="watch-list" element={<WatchList />} />
			<Route path="watch-list/:id" element={<MovieDetailsWL />} loader={movieDetailLoader} />
		</Route>,
		{
			basename: '/movieit-react',
		}
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
