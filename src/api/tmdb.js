import axios from "axios";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || "https://api.themoviedb.org/3";

if (!TMDB_API_KEY || TMDB_API_KEY === "your_tmdb_key_here") {
  console.error("TMDB API key is not configured. Please add VITE_TMDB_API_KEY to your .env file.");
}

const tmdb = axios.create({
  baseURL: TMDB_BASE_URL,
  params: { api_key: TMDB_API_KEY },
});

export const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
export const BACKDROP_BASE = "https://image.tmdb.org/t/p/w1280";

export async function searchMovie(title, year) {
  const { data } = await tmdb.get("/search/movie", {
    params: { query: title, year, include_adult: false },
  });
  return data.results[0] || null;
}

export async function getMovieDetails(movieId) {
  const { data } = await tmdb.get(`/movie/${movieId}`);
  return data;
}

export async function getMovieTrailer(movieId) {
  const { data } = await tmdb.get(`/movie/${movieId}/videos`);
  const trailer = data.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );
  return trailer ? trailer.key : null;
}

export async function getMovieCast(movieId) {
  const { data } = await tmdb.get(`/movie/${movieId}/credits`);
  return data.cast.slice(0, 5);
}

export async function enrichRecommendations(aiRecommendations) {
  const enriched = await Promise.all(
    aiRecommendations.map(async ({ title, year, reason }) => {
      try {
        const movie = await searchMovie(title, year);
        if (!movie) return null;

        const [details, trailerKey, cast] = await Promise.all([
          getMovieDetails(movie.id),
          getMovieTrailer(movie.id),
          getMovieCast(movie.id),
        ]);

        return {
          id: movie.id,
          title: movie.title,
          year: movie.release_date?.split("-")[0],
          overview: movie.overview,
          poster: movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : null,
          backdrop: movie.backdrop_path ? `${BACKDROP_BASE}${movie.backdrop_path}` : null,
          rating: movie.vote_average?.toFixed(1),
          genres: details.genres?.map((g) => g.name),
          runtime: details.runtime,
          trailerKey,
          cast,
          reason,
        };
      } catch {
        return null;
      }
    })
  );

  return enriched.filter(Boolean);
}
