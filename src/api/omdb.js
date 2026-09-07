import axios from "axios";

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const OMDB_BASE_URL = "https://www.omdbapi.com/";

if (!OMDB_API_KEY || OMDB_API_KEY === "your_omdb_key_here") {
  console.error("OMDb API key is not configured. Please add VITE_OMDB_API_KEY to your .env file.");
}

export async function searchMovie(title, year) {
  try {
    const { data } = await axios.get(OMDB_BASE_URL, {
      params: {
        apikey: OMDB_API_KEY,
        t: title,
        y: year,
        type: "movie",
        plot: "full",
      },
    });

    if (data.Response === "False") {
      return null;
    }

    return data;
  } catch (error) {
    console.error("OMDb search error:", error);
    return null;
  }
}

export async function enrichRecommendations(aiRecommendations) {
  const enriched = await Promise.all(
    aiRecommendations.map(async ({ title, year, reason }) => {
      try {
        const movie = await searchMovie(title, year);
        if (!movie) return null;

        const genres = movie.Genre ? movie.Genre.split(", ") : [];
        const cast = movie.Actors ? movie.Actors.split(", ").slice(0, 5).map(name => ({ name })) : [];
        const rating = movie.imdbRating !== "N/A" ? movie.imdbRating : null;
        const runtime = movie.Runtime !== "N/A" ? parseInt(movie.Runtime) : null;

        return {
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          overview: movie.Plot !== "N/A" ? movie.Plot : "No description available",
          poster: movie.Poster !== "N/A" ? movie.Poster : null,
          backdrop: movie.Poster !== "N/A" ? movie.Poster : null,
          rating: rating,
          genres: genres,
          runtime: runtime,
          trailerKey: null,
          cast: cast,
          reason,
          director: movie.Director !== "N/A" ? movie.Director : null,
          awards: movie.Awards !== "N/A" ? movie.Awards : null,
        };
      } catch (error) {
        console.error(`Error enriching ${title}:`, error);
        return null;
      }
    })
  );

  return enriched.filter(Boolean);
}
