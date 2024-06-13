import { Link } from 'react-router-dom';

import { AiFillDelete, AiOutlineInfoCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { wishListAction } from '../store/wishListSlice';

function WatchlistMovie({ movie }) {
	const dispatch = useDispatch();
	const onClickHandler = () => {
		dispatch(wishListAction.delete(movie.id));
	};
	return (
		<div className="container---watchList">
			<div className="imgContainer--watchList">
				{movie.poster_path === null ? (
					<img src="./nopic.png" alt="" />
				) : (
					<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="withPic--movieDetail	" alt="" />
				)}
			</div>
			<p>{movie.title}</p>
			<div className="buttons-container">
				<div className="button-wrapper">
					<Link to={`${movie.id}`}>
						<button>
							<AiOutlineInfoCircle />
						</button>
					</Link>

					<Link>
						<button onClick={onClickHandler}>
							<AiFillDelete />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default WatchlistMovie;
