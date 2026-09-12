# AI Movie Recommendation System

A full-stack AI-powered movie recommendation application built with React, Vite, Mistral AI, and TMDB API.

## Features

- Natural language movie search powered by Mistral AI
- Real-time movie recommendations with detailed information
- Movie posters, ratings, genres, and cast information
- YouTube trailer integration
- Responsive design with Tailwind CSS
- Fast development with Vite and HMR

## Tech Stack

- React 19 with Vite
- Tailwind CSS for styling
- Zustand for state management
- Axios for HTTP requests
- Mistral AI for natural language processing
- TMDB API for movie data

## Setup Instructions

### Prerequisites

- Node.js 16+ installed
- Mistral API key
- TMDB API key (free at https://www.themoviedb.org/settings/api)

### Installation

1. Navigate to the project directory:
```bash
cd "D:\PROJECT X\AI Movie Recommendation System\ai-movie-recommender"
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update `VITE_TMDB_API_KEY` with your TMDB API key
   - Mistral API key is already configured

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to the URL shown in the terminal (typically http://localhost:5173)

## Usage

1. Enter a natural language query describing the type of movie you want
   - Example: "Mind-bending sci-fi like Inception"
   - Example: "Emotional drama like The Shawshank Redemption"

2. Click "Recommend" or press Enter

3. Browse the AI-generated recommendations with full movie details

4. Click "Watch Trailer" to view YouTube trailers in a modal

## Project Structure

```
ai-movie-recommender/
├── src/
│   ├── api/
│   │   ├── mistral.js          # Mistral AI integration
│   │   └── tmdb.js             # TMDB API integration
│   ├── components/
│   │   ├── MovieCard.jsx       # Movie display card
│   │   └── TrailerModal.jsx    # YouTube trailer modal
│   ├── hooks/
│   │   └── useRecommendations.js # Custom hook for fetching
│   ├── store/
│   │   └── useMovieStore.js    # Zustand global state
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── .env                        # Environment configuration
├── .env.example                # Environment template
└── package.json                # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter

## API Configuration

### Mistral AI
- Model: mistral-small-latest
- Endpoint: https://api.mistral.ai/v1/chat/completions
- Returns structured JSON with movie recommendations

### TMDB API
- Base URL: https://api.themoviedb.org/3
- Endpoints used:
  - /search/movie - Search for movies
  - /movie/{id} - Get movie details
  - /movie/{id}/videos - Get trailer information
  - /movie/{id}/credits - Get cast information

## Environment Variables

- `VITE_MISTRAL_API_KEY` - Your Mistral AI API key
- `VITE_TMDB_API_KEY` - Your TMDB API key
- `VITE_TMDB_BASE_URL` - TMDB API base URL
- `VITE_TMDB_IMAGE_BASE` - TMDB image CDN base URL

## Cost Information

- Mistral AI: Approximately $0.02 per 1M tokens (minimal cost for student projects)
- TMDB API: Free with high request limits (40-50 requests/second)

## Build Output

The production build is optimized and outputs to the `dist/` directory.

Build size:
- HTML: ~0.47 kB
- CSS: ~21.72 kB (6.00 kB gzipped)
- JS: ~248.67 kB (81.42 kB gzipped)

