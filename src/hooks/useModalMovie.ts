import { useState } from "react";
import type { Movie } from "../types";

export const useMovieModal = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedMovie(null);
  };

  return {
    selectedMovie,
    isModalVisible,
    openModal,
    closeModal,
  };
};
