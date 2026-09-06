import { create } from "zustand";

const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: null,
  selectedMovie: null,
  showTrailer: false,

  setMovies: (movies) => set({ movies }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  setShowTrailer: (show) => set({ showTrailer: show }),
  reset: () => set({ movies: [], error: null }),
}));

export default useMovieStore;
