import { MdAddToQueue } from 'react-icons/md';
import { wishListAction } from '../store/wishListSlice';
import Modal from './Modal';

import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

function MovieDetailWL({ movieDetail }) {
	const dispatch = useDispatch();
	function formatYear(inputDate) {
		// Parse the input date string to obtain year, month, and day values
		const [year, month, day] = inputDate.split('-');

		// Create a Date object using the parsed values (Note: month is 0-indexed in JavaScript Date)
		const dateObj = new Date(year, month - 1, day);

		// Get the month name
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const monthName = monthNames[dateObj.getMonth()];

		// Get the day of the month
		const dayOfMonth = dateObj.getDate();

		// Format the date string as "Month day, year"
		const formattedDate = `${monthName} ${dayOfMonth}, ${year}`;

		return year;
	}
	function formatDate(inputDate) {
		// Parse the input date string to obtain year, month, and day values
		const [year, month, day] = inputDate.split('-');

		// Create a Date object using the parsed values (Note: month is 0-indexed in JavaScript Date)
		const dateObj = new Date(year, month - 1, day);

		// Get the month name
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const monthName = monthNames[dateObj.getMonth()];

		// Get the day of the month
		const dayOfMonth = dateObj.getDate();

		// Format the date string as "Month day, year"
		const formattedDate = `${monthName} ${dayOfMonth}, ${year}`;

		return formattedDate;
	}

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAdded, setIsAdded] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
		setIsAdded(false);
	};

	useEffect(() => {
		if (!isAdded) {
			setIsModalOpen(false);
		} else if (isAdded) {
			setIsModalOpen(true);
		}
	}, [isAdded]);

	const onAddHandler = () => {
		setIsAdded(true);
		dispatch(
			wishListAction.add({
				id: movieDetail.id,
				title: movieDetail.title,
				poster_path: movieDetail.poster_path,
				release_date: movieDetail.release_date,
			})
		);
	};

	return (
		<div className="container--movieDetail">
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<h1>Added Successfully!</h1>
				<h4>NOTE: Keep in mind that duplication of movie in the watch list is not allowed</h4>
			</Modal>
			<div className="imgContainer--movieDetail">
				{movieDetail.poster_path === null ? (
					<img src="./nopic.png" className="noPic" alt="" />
				) : (
					<img
						src={`https://image.tmdb.org/t/p/w200${movieDetail.poster_path}`}
						className="withPic--movieDetail	"
						alt=""
					/>
				)}
			</div>
			<div className="details--movieDetail">
				<h3 className="title">
					{movieDetail.title} ({formatYear(movieDetail.release_date)}) <br />
					<h5>{formatDate(movieDetail.release_date)}</h5>
				</h3>

				<p>{movieDetail.overview}</p>
			</div>

			<Link to={'/watch-list'}>
				<button className="backBtn--movieDetail">&larr; Go Back</button>
			</Link>
		</div>
	);
}

export default MovieDetailWL;
