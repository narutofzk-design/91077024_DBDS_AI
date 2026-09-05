import useMovieStore from "../store/useMovieStore";

export default function MovieCard({ movie }) {
  const { setSelectedMovie, setShowTrailer } = useMovieStore();

  const handleTrailer = () => {
    setSelectedMovie(movie);
    setShowTrailer(true);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={movie.title}
          />
        ) : (
          <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#25252d', color: '#6b6b6b'}}>
            No Image Available
          </div>
        )}
        {movie.rating && (
          <div className="movie-rating">
            <span className="material-symbols-outlined" style={{fontSize: '16px', fontVariationSettings: '"FILL" 1'}}>star</span>
            {movie.rating}
          </div>
        )}
      </div>

      <div className="movie-info">
        <h3 className="movie-title">
          {movie.title}{" "}
          <span className="movie-year">({movie.year})</span>
        </h3>

        {movie.genres && movie.genres.length > 0 && (
          <div className="movie-genres">
            {movie.genres.map((g) => (
              <span key={g} className="genre-tag">{g}</span>
            ))}
          </div>
        )}

        {movie.reason && (
          <p className="movie-reason">{movie.reason}</p>
        )}

        <p className="movie-overview">{movie.overview}</p>

        <div className="movie-meta">
          {movie.runtime && (
            <div>Runtime: {movie.runtime} min</div>
          )}

          {movie.cast && movie.cast.length > 0 && (
            <div>Cast: {movie.cast.map((c) => c.name).join(", ")}</div>
          )}

          {movie.director && (
            <div>Director: {movie.director}</div>
          )}

          {movie.awards && (
            <div>Awards: {movie.awards}</div>
          )}
        </div>

        <div className="movie-actions">
          {movie.trailerKey && (
            <button onClick={handleTrailer} className="btn-action">
              <span className="material-symbols-outlined" style={{fontSize: '18px'}}>play_circle</span>
              Trailer
            </button>
          )}

          {movie.id && movie.id.startsWith("tt") && (
            <a
              href={`https://www.imdb.com/title/${movie.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action imdb"
            >
              <span style={{fontSize: '16px', fontWeight: 'bold'}}>IMDb</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
