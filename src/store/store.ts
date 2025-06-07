import { configureStore } from "@reduxjs/toolkit";
import { genresApi, searchApi, moviesApi, discoverApi } from "./api";
import moviesReducer from "./slices/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [genresApi.reducerPath]: genresApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [discoverApi.reducerPath]: discoverApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      genresApi.middleware,
      moviesApi.middleware,
      searchApi.middleware,
      discoverApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
