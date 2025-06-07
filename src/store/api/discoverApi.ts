import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MovieResponse } from "../../types";
import { API_BASE_URL, DISCOVER_MOVIES_PATH } from "../../constants";
import type { DiscoverParams, TransformedResponse } from "../types";

export const discoverApi = createApi({
  reducerPath: "discoverApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    discoverMovies: builder.query<TransformedResponse, DiscoverParams>({
      query: ({ genre, rating, ...rest }) => ({
        url: DISCOVER_MOVIES_PATH,
        params: {
          ...rest,
          with_genres: genre?.toString(),
          "vote_average.gte": rating,
          api_key: import.meta.env.VITE_API_KEY,
        },
      }),
      transformResponse: (response: MovieResponse): TransformedResponse => ({
        movies: response.results,
        totalResults: response.total_results,
      }),
    }),
  }),
});

export const { useDiscoverMoviesQuery } = discoverApi;
