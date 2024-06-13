import { configureStore } from '@reduxjs/toolkit';

import wishListSlice from './wishListSlice';

const store = configureStore({
	reducer: { wishList: wishListSlice.reducer },
});

export default store;
