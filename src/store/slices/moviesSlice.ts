import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Filters } from "../../types";
import type { MoviesState } from "../types";

const initialState: MoviesState = {
  query: "",
  shouldSearch: true,
  shouldFetch: true,
  filters: {
    year: null,
    rating: null,
    genre: null,
  },
  page: 1,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.shouldSearch = false;
    },
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
      state.shouldFetch = false;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    applySearch: (state) => {
      state.page = 1;
      state.shouldSearch = true;
      state.shouldFetch = true;
    },
    applyFilters: (state) => {
      state.page = 1;
      state.shouldFetch = true;
    },
    resetFilters: (state) => {
      state.filters = { year: null, rating: null, genre: null };
      state.page = 1;
      state.shouldSearch = false;
      state.shouldFetch = true;
    },
    setShouldSearch: (state, action: PayloadAction<boolean>) => {
      state.shouldSearch = action.payload;
    },
    setShouldFetch: (state, action: PayloadAction<boolean>) => {
      state.shouldFetch = action.payload;
    },
  },
});

export const {
  setQuery,
  setFilters,
  setPage,
  applySearch,
  applyFilters,
  resetFilters,
  setShouldSearch,
  setShouldFetch,
} = moviesSlice.actions;

export default moviesSlice.reducer;
