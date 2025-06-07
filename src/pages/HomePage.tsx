import { List, Result, Typography } from "antd";
import {
  MovieCard,
  SearchAndFilter,
  PaginationBar,
  MovieModal,
  Header,
} from "../components";
import { useDiscoverMoviesQuery, useSearchMoviesQuery } from "../store/api";
import { useMovieHandlers, useMovieModal } from "../hooks";

const { Title } = Typography;

export const HomePage = () => {
  const {
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
  } = useMovieHandlers();

  const { selectedMovie, isModalVisible, openModal, closeModal } =
    useMovieModal();

  const isSearchMode = shouldSearch && !!query;

  const {
    data: discoverData,
    isLoading: isDiscoverLoading,
    isError: isDiscoverError,
  } = useDiscoverMoviesQuery(
    {
      year: filters.year ?? undefined,
      rating: filters.rating ?? undefined,
      genre: filters.genre ?? undefined,
      page,
    },
    {
      skip: isSearchMode || !shouldFetch,
    }
  );

  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useSearchMoviesQuery(
    { query, page },
    {
      skip: !isSearchMode || !shouldFetch,
    }
  );

  const data = isSearchMode ? searchData : discoverData;
  const isLoading = isSearchMode ? isSearchLoading : isDiscoverLoading;
  const isError = isSearchMode ? isSearchError : isDiscoverError;

  if (isError) {
    return (
      <Result
        status="error"
        title="Failed to load movies"
        subTitle="Please check your connection or try again later."
      />
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        fontFamily: "Mulish, sans-serif",
      }}
    >
      <Header />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px",
          backgroundColor: "transparent",
        }}
      >
        <SearchAndFilter
          query={query}
          setQuery={handleQueryChange}
          filters={filters}
          setFilters={handleFiltersChange}
          onSearch={handleSearch}
          onApplyFilters={handleApplyFilters}
          onClearFilters={handleClearFilters}
        />

        <Title level={4} style={{ fontFamily: "Mulish, sans-serif" }}>
          Total Movies: {data?.totalResults ?? 0}
        </Title>

        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          dataSource={data?.movies || []}
          loading={isLoading}
          renderItem={(movie) => (
            <List.Item>
              <MovieCard movie={movie} onClick={() => openModal(movie)} />
            </List.Item>
          )}
        />

        {data?.totalResults && (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 32 }}
          >
            <PaginationBar
              current={page}
              total={data.totalResults}
              onChange={handlePageChange}
            />
          </div>
        )}

        {isModalVisible && selectedMovie?.id && (
          <MovieModal
            visible={isModalVisible}
            movieId={selectedMovie?.id ?? null}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};
