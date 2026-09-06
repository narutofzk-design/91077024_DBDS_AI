import { getAIRecommendations } from "../api/mistral";
import { enrichRecommendations as enrichTMDB } from "../api/tmdb";
import { enrichRecommendations as enrichOMDB } from "../api/omdb";
import useMovieStore from "../store/useMovieStore";

export function useRecommendations() {
  const { setMovies, setLoading, setError, reset } = useMovieStore();

  const fetchRecommendations = async (query) => {
    reset();
    setLoading(true);
    try {
      console.log("Starting recommendation fetch for query:", query);
      const aiResults = await getAIRecommendations(query);
      console.log("AI results received:", aiResults);
      
      const provider = import.meta.env.VITE_MOVIE_API_PROVIDER || "omdb";
      console.log("Using provider:", provider);
      let enriched;
      
      if (provider === "omdb") {
        enriched = await enrichOMDB(aiResults);
      } else {
        enriched = await enrichTMDB(aiResults);
      }
      
      console.log("Enriched results:", enriched);
      setMovies(enriched);
    } catch (err) {
      console.error("Recommendation fetch error:", err);
      console.error("Error stack:", err.stack);
      setError("Failed to get recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { fetchRecommendations };
}
