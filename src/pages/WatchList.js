import { BsTypeH1 } from 'react-icons/bs';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import WatchlistMovie from '../components/WatchlistMovie';

function WatchList(props) {
	const movies = useSelector((state) => state.wishList.movies);
	const message = useSelector((state) => state.wishList.messages);

	return (
		<div className="containerWatchListPage">
			{movies.length !== 0 ? (
				movies.map((movie) => <WatchlistMovie movie={movie} />)
			) : (
				<div className="noMovies">
					<p>
						Your watch list is empty. <br /> Go to <Link to="/">Home</Link> to move Movies
					</p>
				</div>
			)}
		</div>
	);
}

export default WatchList;
