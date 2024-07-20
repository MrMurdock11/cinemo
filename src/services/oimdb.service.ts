import { Movie } from '../models/movie.model';

const API_KEY = 'your-api-key';
const BASE_URL = 'https://www.omdbapi.com/';

export interface MovieDto {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
  // try {
  //   const response = await fetch(BASE_URL + `?s=${query}&apikey=${API_KEY}`);

  //   if (response.ok) {
  //     const data = await response.json();
  //     return data.Search;
  //   } else {
  //     return [];
  //   }
  // } catch (error) {
  //   console.error('Error fetching data from OMDb API:', error);
  //   return [];
  // }
  return Promise.resolve(
    [
      {
        Title: 'Tootsie',
        Year: '1982',
        imdbID: 'tt0084805',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BM2Q2MDJjZWEtYTcwNC00ODkyLWJiNmEtNGNmNGM5ZTA5NmQ3XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg',
      },
      {
        Title: 'Kung Fu Tootsie',
        Year: '2007',
        imdbID: 'tt1062934',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNjZjZWQ2NmQtMjlhOS00YWYwLWFmNGMtN2JkZWM1ODc0ZTk4XkEyXkFqcGdeQXVyMjUzNDk4OTQ@._V1_SX300.jpg',
      },
      {
        Title: 'Saving Private Tootsie',
        Year: '2002',
        imdbID: 'tt0365719',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZWQ0OTg5ZTktNTk0Yy00ODFlLTk2NWYtZjViYzQ0YjdjYWU2XkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg',
      },
      {
        Title: 'A Better Man: The Making of Tootsie',
        Year: '2008',
        imdbID: 'tt2351141',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOWU5NzI1NjYtOTNjZi00ZDRhLTgxMzgtZTQ0NDBlMWZjZGY1XkEyXkFqcGdeQXVyNjU5MDAzNTA@._V1_SX300.jpg',
      },
      {
        Title: 'Tootsie Blow Pop',
        Year: '2006',
        imdbID: 'tt1006968',
        Type: 'movie',
        Poster: 'N/A',
      },
      {
        Title: 'Tootsie Pop: How Many Licks',
        Year: '1969',
        imdbID: 'tt11403732',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTNlMDE5ZTYtMDk0Zi00NzUwLWI0ZmUtYzc0ZTQ1ZDIzMmNkXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_SX300.jpg',
      },
      {
        Title: 'Tootsie Hippodrome',
        Year: '1952–1954',
        imdbID: 'tt12365294',
        Type: 'series',
        Poster: 'N/A',
      },
      {
        Title: "What's Gonna Happen: Backstage at 'Tootsie' with Sarah Stiles",
        Year: '2019',
        imdbID: 'tt14924384',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYWZkZmY5N2QtMWVlMy00OTRhLWJjZTItYjE1NTdmOGIxYTlhXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_SX300.jpg',
      },
      {
        Title: 'Episode 156: &quot;Tootsie&quot; (1982): Movie Review',
        Year: '1982',
        imdbID: 'tt22181546',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTYwMzQ5Y2EtMjhiYS00ZDc5LWI1ZDUtNmU3MGRhYTZkYzMyXkEyXkFqcGdeQXVyMTUyMTUzNjE0._V1_SX300.jpg',
      },
      {
        Title: 'Episode 336: Tootsie (1982)',
        Year: '1982',
        imdbID: 'tt27778710',
        Type: 'movie',
        Poster: 'N/A',
      },
    ].map(
      (m) =>
        ({
          imdbId: m.imdbID,
          title: m.Title,
          type: m.Type,
          poster: m.Poster,
          year: m.Year,
        }) as Movie,
    ),
  );
};
