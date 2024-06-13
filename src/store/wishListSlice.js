import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
	name: 'addToWishList',
	initialState: {
		movies: [],
		messages: '',
	},
	reducers: {
		add(state, action) {
			const newMovie = action.payload;
			const existingMovie = state.movies.find((item) => item.id === newMovie.id);

			if (!existingMovie) {
				state.movies.push({
					id: newMovie.id,
					title: newMovie.title,
					poster_path: newMovie.poster_path,
					release_date: newMovie.release_date,
				});

				state.messages = 'Movie Added Successfully';
				console.log(state.messages, state.movies);
			} else if (existingMovie) {
				state.messages = 'Movie is already in the watch list';
			} else {
				state.messages.push({
					message: 'Something went wrongxx',
				});
			}
		},
		delete(state, action) {
			const id = action.payload;
			state.movies = state.movies.filter((movie) => movie.id !== id);
		},
	},
});

export default wishListSlice;
export const wishListAction = wishListSlice.actions;
