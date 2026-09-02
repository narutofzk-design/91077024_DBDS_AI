# 🎬 AI Movie Recommendation System

An AI-powered movie recommendation web application built with **Flask**, **Python**, **HTML/CSS/JavaScript**, and a **Large Language Model (LLM) API** (OpenAI, Claude, or Gemini). The system understands natural language and provides personalized movie recommendations based on the user's mood, preferences, genres, actors, or any custom description.

---

## 📌 Project Overview

The AI Movie Recommendation System uses a Large Language Model to generate intelligent movie suggestions instead of relying only on traditional recommendation algorithms. Users can type requests like:

> "I want a thrilling movie with a strong female lead."

or

> "Suggest something funny but emotional."

The LLM interprets the request and returns curated movie recommendations with titles, genres, synopses, and explanations.

This project demonstrates practical AI integration into a full-stack web application.

---

## ✨ Features

- 🤖 AI-powered movie recommendations using an LLM API.
- 💬 Natural language understanding for personalized suggestions.
- 🎭 Genre, mood, actor, and preference-based recommendations.
- 📱 Responsive user interface for desktop and mobile.
- ⏳ Loading spinner while AI processes requests.
- 🔒 Secure API key storage using `.env`.
- ❌ Error handling for invalid input or API failures.
- 🔄 Reset / Try Again functionality.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Python | Backend logic |
| Flask | Web framework |
| HTML5 | Frontend structure |
| CSS3 | Styling and responsive UI |
| JavaScript | Client-side interaction |
| OpenAI / Claude / Gemini API | AI movie recommendations |
| python-dotenv | Secure environment variables |

---

## 📂 Project Structure

```text
AI-Movie-Recommendation-System/
│── app.py                 # Flask backend
│── requirements.txt        # Python dependencies
│── .env                   # API key (not committed)
│── static/
│   ├── style.css
│   ├── script.js
│   └── images/
│── templates/
│   └── index.html
│── README.md
```

---

## ⚙️ How It Works

1. User enters a movie preference in natural language.
2. Flask receives the request.
3. Prompt engineering formats the request for the LLM.
4. The LLM generates structured movie recommendations.
5. Flask parses the response.
6. The frontend displays movie cards with recommendations.

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AI-Movie-Recommendation-System.git
cd AI-Movie-Recommendation-System
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it:

**Windows**

```bash
venv\Scripts\activate
```

**macOS/Linux**

```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Create `.env`

```env
OPENAI_API_KEY=your_api_key_here
```

### 5. Run the Application

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

---

## 💡 Example User Queries

- "Recommend action movies like John Wick."
- "I want romantic movies with a happy ending."
- "Suggest mind-bending sci-fi movies."
- "Something suspenseful but not horror."
- "Best comedy movies to watch with friends."

---

## 📋 Functional Requirements

### Core Features

- User enters a free-text movie request.
- Flask sends the request to an LLM API.
- AI returns five personalized movie recommendations.
- Recommendations include title, genre, synopsis, and reason.
- API keys remain secure on the server.

### UI/UX Features

- Responsive layout.
- Loading indicator.
- Error handling.
- Reset button.

### Future Enhancements

- Movie posters using TMDB API.
- User authentication.
- Watchlist.
- Rating history.
- Search history and favorites.

---

## 📖 Methodology

```text
User Input
      │
      ▼
 Flask Backend
      │
      ▼
 Prompt Engineering
      │
      ▼
   LLM API
      │
      ▼
 Structured JSON Response
      │
      ▼
 Flask Parser
      │
      ▼
 Frontend Movie Cards
```

---

## 🎯 Significance

- Demonstrates real-world AI integration.
- Personalized recommendations through natural language.
- Combines AI, backend development, frontend design, and prompt engineering.
- Scalable architecture for future features.

---

## 🔒 Security

- API keys are stored in a `.env` file.
- Sensitive credentials are never exposed to the frontend.
- Backend handles all API communication securely.

---

## 📈 Future Scope

- TMDB/OMDB integration.
- User accounts.
- Personalized watchlists.
- Recommendation history.
- Multi-language support.

---

## 👨‍💻 Author

**Arman Sandhu**

Bachelor's in Data Science — University of Europe for Applied Sciences (UE), Germany

AI Movie Recommendation System | Flask + LLM API Backend
