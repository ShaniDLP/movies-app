export const getRatingColor = (rating?: number): string => {
  if (typeof rating !== "number" || isNaN(rating)) {
    return "#d9d9d9";
  }

  if (rating < 6) return "#f5222d";
  if (rating < 8) return "#faad14";
  return "#52c41a";
};

export const formatRating = (value?: number): number | undefined => {
  if (typeof value !== "number" || isNaN(value)) return undefined;
  return parseFloat(value.toFixed(1));
};
