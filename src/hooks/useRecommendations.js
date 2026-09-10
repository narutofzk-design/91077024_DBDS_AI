import { getAIRecommendations } from "../api/mistral";
import { enrichRecommendations } from "../api/tmdb";
import useMovieStore from "../store/useMovieStore";

export function useRecommendations() {
  const { setMovies, setLoading, setError, reset } = useMovieStore();

  const fetchRecommendations = async (query) => {
    reset();
    setLoading(true);

    try {
      const aiResults = await getAIRecommendations(query);

      const enrichedMovies = await enrichRecommendations(aiResults);

      setMovies(enrichedMovies);
    } catch (error) {
      console.error("Recommendation error:", error);
      setError("Failed to get recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { fetchRecommendations };
}
