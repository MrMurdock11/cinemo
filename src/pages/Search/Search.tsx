import { BackButton } from '@twa-dev/sdk/react';
import React, { useState } from 'react';

import { FilmCard } from '../../children/MyCinemaList/children/FilmCard';
import { Movie } from '../../models/movie.model';
import { searchMovies } from '../../services/oimdb.service';
import { Icon } from '../../shared/components/Icon';
import { SearchIcon } from '../../shared/components/SearchIcon';
import classes from './Search.module.css';

export const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleChangeSearchQuery: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setQuery(e.target.value);
  };

  const handleSearch: React.KeyboardEventHandler = async (e) => {
    e.preventDefault();
    if (e.key !== 'Enter') return;

    const result = await searchMovies(query);
    setMovies(result);
  };

  return (
    <>
      <BackButton />

      <div className={classes.container}>
        <div className={classes.wrapper}>
          <label className={classes.search}>
            <Icon width={24} height={24} Icon={SearchIcon} />
            <input onChange={handleChangeSearchQuery} onKeyUp={handleSearch} />
          </label>
        </div>

        <div className={classes.list}>
          {movies.map((m) => (
            <FilmCard movie={m} />
          ))}
        </div>
      </div>
    </>
  );
};
