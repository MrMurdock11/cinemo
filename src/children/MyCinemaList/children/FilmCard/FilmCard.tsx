import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  add as addLibrary,
  remove as removeLibrary,
} from '../../../../features/library/library.slice';
import { add, remove } from '../../../../features/watchlist/watchlist.slice';
import { Movie } from '../../../../models/movie.model';
import { RootState } from '../../../../store';
import classes from './FilmCard.module.css';
import { Poster } from './children/Poster';

export interface MovieProps {
  movie: Movie;
}

export const FilmCard: FC<MovieProps> = ({ movie }) => {
  const { movies: libraryMovies } = useSelector(
    (state: RootState) => state.library,
  );
  const { movies: watchlistMovies } = useSelector(
    (state: RootState) => state.watchlist,
  );
  const dispatch = useDispatch();

  const isInLibrary = useMemo(
    () => libraryMovies.includes(movie.imdbId),
    [libraryMovies, movie.imdbId],
  );

  const isInWatchlist = useMemo(
    () => movie.imdbId in watchlistMovies,
    [watchlistMovies, movie.imdbId],
  );

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <Poster src={movie.poster} />
        <div className={classes.actions}>
          <button
            onClick={() =>
              dispatch(isInWatchlist ? remove(movie.imdbId) : add(movie))
            }
          >
            {isInWatchlist ? '-' : 'Watchlist'}
          </button>
          <button
            onClick={() =>
              dispatch(
                isInLibrary
                  ? removeLibrary(movie.imdbId)
                  : addLibrary(movie.imdbId),
              )
            }
          >
            {isInLibrary ? '-' : 'Library'}
          </button>
        </div>
      </div>
    </div>
  );
};
