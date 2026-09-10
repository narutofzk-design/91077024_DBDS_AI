import { useState, useEffect } from "react";
import { useRecommendations } from "./hooks/useRecommendations";
import useMovieStore from "./store/useMovieStore";
import MovieCard from "./components/MovieCard";
import TrailerModal from "./components/TrailerModal";

const EXAMPLE_QUERIES = [
  "Mind-bending sci-fi like Inception",
  "Emotional drama like The Shawshank Redemption",
  "Action movies with great storytelling",
  "Funny comedies for a movie night",
];

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80",
  "https://images.unsplash.com/photo-1574267432644-f86abe8ccea2?w=1920&q=80",
  "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=1920&q=80",
  "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1920&q=80"
];

export default function App() {
  const [query, setQuery] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const { fetchRecommendations } = useRecommendations();
  const { movies, loading, error } = useMovieStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) fetchRecommendations(query.trim());
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-section">
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={img}
            className="hero-bg-image"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentBgIndex === index ? 1 : 0,
            }}
          />
        ))}
        <div className="hero-bg-overlay"></div>
        <div className="hero-bg-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined" style={{fontSize: '16px'}}>neurology</span>
              <span>AI POWERED RECOMMENDATIONS</span>
            </div>
            
            <h1 className="hero-title">
              CINEMIND AI
            </h1>
            
            <p className="hero-subtitle">
              Discover your next favorite film through intelligent movie recommendations powered by advanced AI
            </p>

            <form onSubmit={handleSubmit} className="search-container">
              <div className="search-glow"></div>
              <div className="search-box">
                <span className="material-symbols-outlined text-purple">search</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe the mood or type of movie you want..."
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
              {EXAMPLE_QUERIES.map((q) => (
                <button
                  key={q}
                  onClick={() => { setQuery(q); fetchRecommendations(q); }}
                  className="prompt-chip"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {error && (
          <div className="error-state">{error}</div>
        )}

        {loading && (
          <div className="loading-state">
            Analyzing your preferences...
          </div>
        )}

        {movies.length > 0 && !loading && (
          <>
            <div className="section-header">
              <span className="material-symbols-outlined text-purple">stars</span>
              <h2 className="section-title">Your Personalized Recommendations</h2>
            </div>
            <div className="movie-grid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>

      <TrailerModal />
    </div>
  );
}
