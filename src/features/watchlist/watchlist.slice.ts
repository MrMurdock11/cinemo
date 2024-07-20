import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Movie } from '../../models/movie.model';
import { RootState } from '../../store';

export interface WatchlistState {
  movies: { [key: string]: Movie };
}

const initialState: WatchlistState = {
  movies: {},
};

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Movie>) => {
      state.movies[action.payload.imdbId] = action.payload;
    },
    remove: (state, action: PayloadAction<Movie['imdbId']>) => {
      delete state.movies[action.payload];
    },
  },
});

const selfSelector = (state: RootState) => state.watchlist;
export const getWatchlistSelector = createSelector(
  selfSelector,
  (state) => state.movies,
);

export const { add, remove } = watchlistSlice.actions;

export default watchlistSlice.reducer;
