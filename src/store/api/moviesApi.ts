import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MovieDetails } from "../../types";
import { API_BASE_URL } from "../../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query<MovieDetails, number>({
      query: (movieId) => ({
        url: `/movie/${movieId}`,
        params: {
          api_key: API_KEY,
          append_to_response: "credits",
        },
      }),
    }),
  }),
});

export const { useGetMovieDetailsQuery } = moviesApi;
