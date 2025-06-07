export const splitGenres = (names: string[], limit: number = 2) => {
  return {
    visibleGenres: names.slice(0, limit),
    hiddenGenres: names.slice(limit),
  };
};

export const extractYear = (releaseDate?: string): string => {
  if (!releaseDate) return "";
  const year = releaseDate.slice(0, 4);
  return year ? `(${year})` : "";
};
