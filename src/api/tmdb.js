const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE = "https://api.themoviedb.org/3";

export const fetchGenres = async () => {
  const res = await fetch(`${BASE}/genre/movie/list?api_key=${API_KEY}`);
  return res.json();
};

export const fetchPopularMovies = async () => {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}`);
  return res.json();
};

export const fetchRecommendations = async (movieId) => {
  const res = await fetch(`${BASE}/movie/${movieId}/similar?api_key=${API_KEY}`);
  return res.json();
};
