import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LibraryState {
  movies: string[];
}

const initialState: LibraryState = {
  movies: [],
};

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.movies.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((m) => m !== action.payload);
    },
  },
});

export const { add, remove } = librarySlice.actions;

export default librarySlice.reducer;
