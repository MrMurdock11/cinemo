export interface Movie {
  title: string;
  year: string;
  imdbId: string;
  type: 'movie' | 'series';
  poster: string | 'N/A';
}
