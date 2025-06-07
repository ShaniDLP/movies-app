import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setQuery,
  setFilters,
  setPage,
  setShouldSearch,
  resetFilters,
  applyFilters,
  applySearch,
  setShouldFetch,
} from "../store/slices/moviesSlice";
import type { Filters } from "../types";

export const useMovieHandlers = () => {
  const dispatch = useAppDispatch();
  const { query, filters, page, shouldSearch, shouldFetch } = useAppSelector(
    (state) => state.movies
  );

  const handleQueryChange = (val: string) => {
    dispatch(setQuery(val));
    dispatch(setShouldSearch(false));
  };

  const handleFiltersChange = (newFilters: Filters) => {
    dispatch(setFilters(newFilters));
    dispatch(setShouldFetch(false));
  };

  const handleSearch = () => {
    dispatch(applySearch());
  };

  const handleApplyFilters = () => {
    dispatch(applyFilters());
  };

  const handleClearFilters = () => {
    dispatch(resetFilters());
  };

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  return {
    query,
    filters,
    page,
    shouldSearch,
    shouldFetch,
    handleQueryChange,
    handleFiltersChange,
    handleSearch,
    handleApplyFilters,
    handleClearFilters,
    handlePageChange,
  };
};
