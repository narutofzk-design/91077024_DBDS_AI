import axios from "axios";
import { getLocalRecommendations } from "./fallback";

const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

const systemPrompt = `You are a movie recommendation expert. 
When given a user's movie preference or description, return ONLY a valid JSON array 
of exactly 18 movie recommendations in this format:
[
  {
    "title": "Movie Title",
    "year": 2010,
    "reason": "One sentence explaining why this matches the user's request"
  }
]
If the user mentions a specific movie name, include that movie as the first item, then provide 17 similar recommendations.
No extra text. No markdown. Only the JSON array.`;

export async function getAIRecommendations(userQuery) {
  try {
    console.log("Calling Mistral API with query:", userQuery);
    const response = await axios.post(
      MISTRAL_API_URL,
      {
        model: "mistral-small-latest",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userQuery },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_MISTRAL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Mistral API response:", response.data);
    const raw = response.data.choices[0].message.content.trim();
    console.log("Raw AI response:", raw);
    const parsed = JSON.parse(raw);
    console.log("Parsed recommendations:", parsed);
    return parsed;
  } catch (error) {
    console.error("Mistral API Error:", error);
    console.error("Error details:", error.response?.data || error.message);
    
    if (error.response?.status === 429) {
      console.warn("Mistral API rate limit reached. Using fallback recommendations.");
      return getLocalRecommendations(userQuery);
    }
    
    console.warn("Mistral API failed. Using fallback recommendations.");
    return getLocalRecommendations(userQuery);
  }
}
