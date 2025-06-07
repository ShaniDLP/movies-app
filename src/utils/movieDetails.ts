import type { MovieDetails } from "../types";

export const getDirector = (credits: MovieDetails["credits"]) =>
  credits?.crew?.find((m) => m.job === "Director");

export const getTopCast = (credits: MovieDetails["credits"]) =>
  credits?.cast?.slice(0, 5) ?? [];
