import React from 'react';
import { useLoaderData } from 'react-router-dom';

import MovieDetail from '../components/MovieDetail';
import MovieDetailWL from '../components/MovieDetail_WL';

function MovieDetailsWL(props) {
	const movie = useLoaderData();

	if (!movie) {
		return <div>Loading...</div>; // Handle the case where data is not loaded yet
	}

	return (
		<div>
			<MovieDetailWL key={movie.title} movieDetail={movie} />
		</div>
	);
}

export default MovieDetailsWL;
export const movieDetailLoader = async ({ params }) => {
	const { id } = params;

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWRkY2EwNTI1Njk4MDUyNmM0Y2MxOGY2ZmIzNjE5NCIsInN1YiI6IjY0YzRjYzFiZWVjNWI1MDBmZjUxN2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XBovtRU4J6dutgraZFqLBGq6JOh50d86rwowfHM0oS0',
		},
	};

	try {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
		const data = await response.json();

		if (!data.errors) {
			return data;
		} else {
			return null;
		}
	} catch (err) {
		console.error(err);
		return null;
	}
};
