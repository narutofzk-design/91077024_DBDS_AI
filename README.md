# AI Movie Recommender

## Project Overview

AI Movie Recommender is a React-based web application that recommends movies based on a user's mood, interests, or movie preferences.

The application uses Mistral AI to generate movie recommendations and external movie APIs such as TMDB and OMDb to retrieve movie information including posters, ratings, genres, descriptions, and trailers.

The goal of the project is to combine artificial intelligence with external APIs to create a simple and interactive movie recommendation system.

---

## Features

- AI-generated movie recommendations
- Search movies using natural language
- Movie posters and information
- IMDb ratings
- Movie genres and descriptions
- Runtime and release information
- Movie trailer functionality
- Loading and error states
- Local fallback recommendations
- Responsive user interface
- Example search prompts
- Centralized state management using Zustand

---

## Technologies Used

### Frontend
- React
- Vite
- JavaScript
- HTML
- CSS

### State Management
- Zustand

### AI
- Mistral AI API

### Movie APIs
- TMDB API
- OMDb API

### Other Libraries
- Axios

---

## Application Workflow

The application follows this workflow:

User Preference  
↓  
React User Interface  
↓  
Recommendation Hook  
↓  
Mistral AI  
↓  
TMDB / OMDb  
↓  
Movie Information  
↓  
Recommendation Cards  
↓  
Movie Trailer

The user enters a movie preference such as:

> Mind-bending science fiction movies like Inception

Mistral AI generates movie recommendations based on the request.

The recommended movie titles are then sent to TMDB or OMDb to retrieve additional information such as posters, ratings, genres, and descriptions.

The final movie recommendations are then displayed to the user.

---

## Project Structure

```text
ai-movie-recommender/
│
├── src/
│   ├── api/
│   │   ├── mistral.js
│   │   ├── omdb.js
│   │   ├── tmdb.js
│   │   └── fallback.js
│   │
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── TrailerModal.jsx
│   │
│   ├── hooks/
│   │   └── useRecommendations.js
│   │
│   ├── store/
│   │   └── useMovieStore.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── Logs/
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
nstallation

Clone the repository:

git clone https://github.com/narutofzk-design/91077024_DBDS_AI.git

Open the project directory:

cd 91077024_DBDS_AI

Install the required dependencies:

npm install
Environment Variables

Create a .env file in the project directory.

Use .env.example as a template.

Example:

VITE_MISTRAL_API_KEY=your_mistral_api_key

VITE_OMDB_API_KEY=your_omdb_api_key

VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_TMDB_BASE_URL=https://api.themoviedb.org/3

VITE_TMDB_IMAGE_BASE=https://image.tmdb.org/t/p/w500

VITE_MOVIE_API_PROVIDER=tmdb

The real .env file should not be uploaded to GitHub.

Running the Application

Start the development server:

npm run dev

Vite will display a local development URL.

Open the URL in a browser to use the application.

Example Searches

Users can enter requests such as:

Mind-bending sci-fi movies like Inception
Emotional drama movies
Action movies with great storytelling
Funny movies for a movie night
AI Recommendation Process

The application sends the user's movie preference to Mistral AI.

Mistral generates a list of movies that match the user's request.

The application then uses TMDB or OMDb to retrieve additional movie information.

This separates the recommendation process into two main stages:

AI Recommendation
        ↓
Movie Information Enrichment
Error Handling and Fallback System

The project includes error handling for API failures.

If the Mistral AI request fails, the application can use local fallback movie recommendations.

The application also handles:

API request failures
Missing movie information
Empty recommendation results
Loading states
Invalid responses
Rate limit errors

This allows the application to continue working even when an external service is temporarily unavailable.

Development Progress

Development progress is documented in the Logs directory.

The logs show the development of the application from the initial React setup to AI integration, movie API integration, trailer functionality, error handling, and final UI improvements.

Main development stages included:

React and Vite project setup
Movie recommendation interface
MovieCard component
Zustand state management
Recommendation workflow
Mistral AI integration
OMDb integration
TMDB integration
Movie trailer functionality
Fallback recommendations
Error handling
Responsive UI improvements
Future Improvements

Possible future improvements include:

Add a backend API to protect external API credentials
User accounts and authentication
Save favorite movies
Recommendation history
Movie watchlists
More advanced AI prompts
Filtering by genre, year, and rating
Database integration
Deployment to a cloud platform
Author

Arman Sandhu

Bachelor's Project
AI Movie Recommender


One important point: keep **`.env` out of GitHub**. Only upload `.env.example`. Also, because this is a Vite fron
