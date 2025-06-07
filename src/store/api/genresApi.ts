import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GenresResponse } from "../types";
import { GENRE_PATH } from "../../constants";

export const genresApi = createApi({
  reducerPath: "genresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<GenresResponse, void>({
      query: () => ({
        url: GENRE_PATH,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetGenresQuery } = genresApi;
