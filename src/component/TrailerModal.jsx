import useMovieStore from "../store/useMovieStore";

export default function TrailerModal() {
  const { selectedMovie, showTrailer, setShowTrailer } = useMovieStore();

  if (!showTrailer || !selectedMovie) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowTrailer(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{selectedMovie.title}</h3>
          <button onClick={() => setShowTrailer(false)} className="modal-close">
            &times;
          </button>
        </div>
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${selectedMovie.trailerKey}?autoplay=1`}
            title={selectedMovie.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
