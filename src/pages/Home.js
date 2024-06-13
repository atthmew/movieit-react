import { useState } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';

import MovieResult from '../components/MovieResult';

function Home(props) {
	// const messages = useSelector((state) => state.add.messages);

	const [result, setResult] = useState([]);

	const changeHandler = (e) => {
		console.log(e.target.value);
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWRkY2EwNTI1Njk4MDUyNmM0Y2MxOGY2ZmIzNjE5NCIsInN1YiI6IjY0YzRjYzFiZWVjNWI1MDBmZjUxN2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XBovtRU4J6dutgraZFqLBGq6JOh50d86rwowfHM0oS0',
			},
		};

		fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&language=en-US`, options)
			.then((response) => response.json())
			.then((response) => {
				if (!response.errors) {
					setResult(response.results);
					console.log(response.results);
				} else {
					setResult([]);
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="homeContainer">
			<h1>
				Search a <span> Movie </span> <br /> to <br />
				Watch Later
			</h1>
			<div className="search-container">
				<label htmlFor="search">
					<BsFillSearchHeartFill className="search-icon" />
				</label>
				<input
					type="text"
					onChange={changeHandler}
					id="search"
					className="search-input"
					autoComplete="no"
					autoCorrect="no"
				/>
			</div>

			{result.length !== 0 ? (
				result.map((movies) => <MovieResult key={movies.id} movie={movies} />)
			) : (
				<p className="noResultMessage"> Search something to Move It to your Watch List</p>
			)}
		</div>
	);
}

export default Home;
