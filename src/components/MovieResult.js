import { FaStar } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdAddToQueue } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { wishListAction } from '../store/wishListSlice';
import { useState, useEffect } from 'react';

import Modal from './Modal';

function MovieResult({ movie }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAdded, setIsAdded] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};
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

	const dispatch = useDispatch();

	const addHandler = () => {
		console.log('clicked', movie);
		setIsAdded(true);
		dispatch(
			wishListAction.add({
				id: movie.id,
				title: movie.title,
				poster_path: movie.poster_path,
				release_date: movie.release_date,
			})
		);
	};

	useEffect(() => {
		if (!isAdded) {
			setIsModalOpen(false);
		} else if (isAdded) {
			setIsModalOpen(true);
		}
	}, [isAdded]);
	return (
		<div className="container--movieResult">
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<h1>Added Successfully!</h1>
				<h4>NOTE: Keep in mind that duplication of movie in the watch list is not allowed</h4>
			</Modal>
			<div className="imgContainer--movieResult">
				{movie.poster_path === null ? (
					<img src="./nopic.png" className="noPic" alt="" />
				) : (
					<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="withPic" alt="" />
				)}
				<p className="date--movieResult">{formatDate(movie.release_date)}</p>
			</div>
			<div className="details--movieResult">
				<p className="title--movieResult">{movie.title}</p>
				<p className="rate--movieResult">
					<FaStar className="icon--movieResult" />
					{movie.vote_average.toFixed(2)}/10.0
				</p>
			</div>
			<div className="btns--movieResult">
				<Link to={`${movie.id}`}>
					<button className="btn1--movieResult">
						{' '}
						<AiFillInfoCircle />
					</button>
				</Link>

				<button onClick={addHandler} className="btn2--movieresult">
					{' '}
					<MdAddToQueue />
				</button>
			</div>
		</div>
	);
}

export default MovieResult;
