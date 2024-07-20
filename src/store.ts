import { configureStore } from '@reduxjs/toolkit';

import librarySlice from './features/library/library.slice';
import watchlistSlice from './features/watchlist/watchlist.slice';

export const store = configureStore({
  reducer: {
    library: librarySlice,
    watchlist: watchlistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
