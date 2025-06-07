import type { Filters, Genre, Movie } from "../types";

export type DiscoverParams = {
  year?: number;
  page?: number;
  genre?: number;
  rating?: number;
};

export type TransformedResponse = {
  movies: Movie[];
  totalResults: number;
};

export type GenresResponse = {
  genres: Genre[];
};

export type SearchParams = {
  query: string;
  page?: number;
};
export type MoviesState = {
  query: string;
  shouldSearch: boolean;
  shouldFetch: boolean;
  filters: Filters;
  page: number;
};
