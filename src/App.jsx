import { useState } from "react";

const EXAMPLE_QUERIES = [
  "Mind-bending sci-fi like Inception",
  "Emotional drama",
  "Action movies with great storytelling",
  "Funny movies for a movie night",
];

function App() {
  const [query, setQuery] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      return;
    }

    setSearchText(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-section">
        <div className="hero-bg-overlay"></div>

        <div className="container">
          <div className="hero-content">

            <div className="hero-badge">
              AI MOVIE RECOMMENDER
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
                  className="btn-primary"
                >
                  FIND MOVIES
                </button>

              </div>
            </form>

            <div className="quick-prompts">
              {EXAMPLE_QUERIES.map((example) => (
                <button
                  key={example}
                  className="prompt-chip"
                  onClick={() => setQuery(example)}
                >
                  {example}
                </button>
              ))}
            </div>

            {searchText && (
              <div className="section-header">
                <h2 className="section-title">
                  Searching for: {searchText}
                </h2>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
