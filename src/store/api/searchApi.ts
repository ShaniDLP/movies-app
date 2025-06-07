import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MovieResponse } from "../../types";
import { API_BASE_URL, SEARCH_MOVIES_PATH } from "../../constants";
import type { SearchParams, TransformedResponse } from "../types";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<TransformedResponse, SearchParams>({
      query: ({ query, page = 1 }) => ({
        url: SEARCH_MOVIES_PATH,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          query,
          page,
        },
      }),
      transformResponse: (response: MovieResponse): TransformedResponse => ({
        movies: response.results,
        totalResults: response.total_results,
      }),
    }),
  }),
});

export const { useSearchMoviesQuery } = searchApi;
