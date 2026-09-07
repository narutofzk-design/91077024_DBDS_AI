import { getAIRecommendations } from "../api/mistral";
import useMovieStore from "../store/useMovieStore";

export function useRecommendations() {
  const { setMovies, setLoading, setError, reset } = useMovieStore();

  const fetchRecommendations = async (query) => {
    reset();
    setLoading(true);

    try {
      const recommendations = await getAIRecommendations(query);

      setMovies(recommendations);
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
