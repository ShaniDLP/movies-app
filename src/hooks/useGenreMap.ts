import { useMemo } from "react";
import { useGetGenresQuery } from "../store/api";

export const useGenreMap = () => {
  const { data, ...rest } = useGetGenresQuery();

  const genreMap = useMemo(() => {
    const genres = data?.genres ?? [];
    return Object.fromEntries(genres.map((g) => [g.id, g.name]));
  }, [data]);

  return { genreMap, ...rest };
};
