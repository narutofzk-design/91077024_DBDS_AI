import { getAIRecommendations } from "../api/mistral";
import { enrichRecommendations } from "../api/omdb";
import useMovieStore from "../store/useMovieStore";

export function useRecommendations() {
  const { setMovies, setLoading, setError, reset } = useMovieStore();

  const fetchRecommendations = async (query) => {
    reset();
    setLoading(true);

    try {
      // Get movie suggestions from Mistral AI
      const aiResults = await getAIRecommendations(query);

      // Get real movie information from OMDb
      const enrichedMovies = await enrichRecommendations(aiResults);

      setMovies(enrichedMovies);
    } catch (error) {
      console.error("Recommendation error:", error);

      setError(
        "Failed to get movie recommendations. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return { fetchRecommendations };
}
