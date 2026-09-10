import { useState } from "react";
import { useRecommendations } from "./hooks/useRecommendations";
import useMovieStore from "./store/useMovieStore";
import TrailerModal from "./components/TrailerModal";
import MovieCard from "./components/MovieCard";

const EXAMPLE_QUERIES = [
  "Mind-bending sci-fi like Inception",
  "Emotional drama",
  "Action movies with great storytelling",
  "Funny movies for a movie night",
];

function App() {
  const [query, setQuery] = useState("");

  const { fetchRecommendations } = useRecommendations();
  const { movies, loading, error } = useMovieStore();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) {
      return;
    }

    fetchRecommendations(query.trim());
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-section">
        <div className="hero-bg-overlay"></div>

        <div className="container">
          <div className="hero-content">

            <div className="hero-badge">
              MOVIE RECOMMENDER
            </div>

            <h1 className="hero-title">
              CINEMIND AI
            </h1>

            <p className="hero-subtitle">
              Discover movies based on your mood and preferences.
            </p>

            <form onSubmit={handleSubmit} className="search-container">
              <div className="search-box">

                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Describe the type of movie you want..."
                  className="search-input"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                >
                  {loading ? "SEARCHING..." : "FIND MOVIES"}
                </button>

              </div>
            </form>

            <div className="quick-prompts">
              {EXAMPLE_QUERIES.map((example) => (
                <button
                  key={example}
                  className="prompt-chip"
                  onClick={() => {
                    setQuery(example);
                    fetchRecommendations(example);
                  }}
                >
                  {example}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="container">

        {error && (
          <div className="error-state">
            {error}
          </div>
        )}

        {loading && (
          <div className="loading-state">
            Finding recommendations...
          </div>
        )}

        {movies.length > 0 && !loading && (
          <>
            <div className="section-header">
              <h2 className="section-title">
                Movie Recommendations
              </h2>
            </div>

            <div className="movie-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          <TrailerModal />
        )}

      </div>
    </div>
  );
}

export default App;
