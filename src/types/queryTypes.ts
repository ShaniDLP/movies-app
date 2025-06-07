import type { Movie } from "./movies";

export interface MoviesQueryParams {
  query: string;
  year: number | null;
  rating: number | null;
  genre: number | null;
  page: number;
  enabled?: boolean;
}

export interface MoviesQueryResponse {
  movies: Movie[];
  totalResults: number;
}
