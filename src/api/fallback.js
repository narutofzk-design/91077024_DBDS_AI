const movieDatabase = {
  "sci-fi": [
    { title: "Inception", year: 2010, reason: "Mind-bending dream heist with incredible visuals" },
    { title: "Interstellar", year: 2014, reason: "Epic space exploration with emotional depth" },
    { title: "The Matrix", year: 1999, reason: "Revolutionary cyberpunk action with deep philosophy" },
    { title: "Blade Runner 2049", year: 2017, reason: "Stunning visuals and contemplative sci-fi noir" },
    { title: "Arrival", year: 2016, reason: "Thoughtful alien contact story with unique premise" },
    { title: "Ex Machina", year: 2014, reason: "Intimate AI thriller with philosophical questions" },
    { title: "Dune", year: 2021, reason: "Epic space opera with breathtaking visuals" },
    { title: "Edge of Tomorrow", year: 2014, reason: "Time loop action with clever plot" },
    { title: "District 9", year: 2009, reason: "Gritty alien documentary-style thriller" },
    { title: "Moon", year: 2009, reason: "Isolated space station psychological drama" },
    { title: "Her", year: 2013, reason: "Beautiful AI romance with deep emotions" },
    { title: "Minority Report", year: 2002, reason: "Futuristic crime thriller with moral questions" },
    { title: "Children of Men", year: 2006, reason: "Dystopian thriller with stunning cinematography" },
    { title: "Annihilation", year: 2018, reason: "Trippy alien invasion with body horror" },
    { title: "Looper", year: 2012, reason: "Time travel thriller with strong performances" },
    { title: "2001 A Space Odyssey", year: 1968, reason: "Visionary sci-fi masterpiece" },
  ],
  "drama": [
    { title: "The Shawshank Redemption", year: 1994, reason: "Powerful story of hope and friendship" },
    { title: "Forrest Gump", year: 1994, reason: "Heartwarming journey through American history" },
    { title: "Good Will Hunting", year: 1997, reason: "Moving story of genius finding his path" },
    { title: "A Beautiful Mind", year: 2001, reason: "Inspiring biopic about overcoming mental illness" },
    { title: "The Green Mile", year: 1999, reason: "Emotional supernatural drama on death row" },
    { title: "Schindler's List", year: 1993, reason: "Powerful Holocaust story of heroism" },
    { title: "12 Years a Slave", year: 2013, reason: "Harrowing historical drama" },
    { title: "The Pianist", year: 2002, reason: "Survival story during WWII" },
    { title: "Manchester by the Sea", year: 2016, reason: "Heartbreaking family drama" },
    { title: "Spotlight", year: 2015, reason: "Gripping journalism investigation" },
    { title: "Room", year: 2015, reason: "Intense kidnapping drama with hope" },
    { title: "Whiplash", year: 2014, reason: "Intense student-teacher relationship" },
    { title: "Moonlight", year: 2016, reason: "Beautiful coming-of-age story" },
    { title: "The Revenant", year: 2015, reason: "Brutal survival revenge tale" },
    { title: "There Will Be Blood", year: 2007, reason: "Epic character study of greed" },
    { title: "The Social Network", year: 2010, reason: "Fascinating tech startup drama" },
  ],
  "action": [
    { title: "The Dark Knight", year: 2008, reason: "Epic superhero film with great storytelling" },
    { title: "Mad Max Fury Road", year: 2015, reason: "Non-stop action with stunning visuals" },
    { title: "John Wick", year: 2014, reason: "Stylish revenge thriller with incredible choreography" },
    { title: "Mission Impossible Fallout", year: 2018, reason: "Heart-pounding stunts with strong plot" },
    { title: "Heat", year: 1995, reason: "Crime epic with legendary cast and shootouts" },
    { title: "The Bourne Identity", year: 2002, reason: "Smart spy thriller with intense action" },
    { title: "Casino Royale", year: 2006, reason: "Gritty Bond reboot with intense action" },
    { title: "The Raid", year: 2011, reason: "Indonesian martial arts masterpiece" },
    { title: "Gladiator", year: 2000, reason: "Epic historical action drama" },
    { title: "Die Hard", year: 1988, reason: "Classic action thriller in a building" },
    { title: "Terminator 2", year: 1991, reason: "Revolutionary action with heart" },
    { title: "The Matrix Reloaded", year: 2003, reason: "Spectacular action sequences" },
    { title: "Kill Bill Vol 1", year: 2003, reason: "Stylized revenge action" },
    { title: "Crank", year: 2006, reason: "Non-stop adrenaline rush" },
    { title: "Atomic Blonde", year: 2017, reason: "Stylish spy action with great fights" },
    { title: "Baby Driver", year: 2017, reason: "Action synchronized to music" },
  ],
  "comedy": [
    { title: "The Grand Budapest Hotel", year: 2014, reason: "Quirky comedy with stunning visuals" },
    { title: "Superbad", year: 2007, reason: "Hilarious coming-of-age teen comedy" },
    { title: "The Big Lebowski", year: 1998, reason: "Cult classic comedy with memorable characters" },
    { title: "Groundhog Day", year: 1993, reason: "Clever time loop comedy with heart" },
    { title: "Step Brothers", year: 2008, reason: "Absurd comedy with endless quotable lines" },
    { title: "21 Jump Street", year: 2012, reason: "Smart buddy cop comedy with great chemistry" },
    { title: "The Hangover", year: 2009, reason: "Wild bachelor party gone wrong" },
    { title: "Tropic Thunder", year: 2008, reason: "Satirical action comedy" },
    { title: "Hot Fuzz", year: 2007, reason: "British action comedy mashup" },
    { title: "Shaun of the Dead", year: 2004, reason: "Zombie rom-com" },
    { title: "Bridesmaids", year: 2011, reason: "Female-led comedy with heart" },
    { title: "Anchorman", year: 2004, reason: "Quotable newsroom comedy" },
    { title: "Borat", year: 2006, reason: "Controversial mockumentary" },
    { title: "The 40 Year Old Virgin", year: 2005, reason: "Heartfelt romantic comedy" },
    { title: "Knives Out", year: 2019, reason: "Murder mystery comedy" },
    { title: "Game Night", year: 2018, reason: "Thriller comedy with twists" },
  ],
  "thriller": [
    { title: "Se7en", year: 1995, reason: "Dark detective thriller with shocking ending" },
    { title: "Gone Girl", year: 2014, reason: "Twisty psychological thriller about marriage" },
    { title: "Prisoners", year: 2013, reason: "Intense kidnapping thriller with moral questions" },
    { title: "Shutter Island", year: 2010, reason: "Mind-bending mystery with great atmosphere" },
    { title: "Zodiac", year: 2007, reason: "Meticulous detective work on serial killer case" },
    { title: "No Country for Old Men", year: 2007, reason: "Tense cat-and-mouse thriller with iconic villain" },
    { title: "Memento", year: 2000, reason: "Reverse chronology mystery" },
    { title: "The Prestige", year: 2006, reason: "Magician rivalry with twists" },
    { title: "Sicario", year: 2015, reason: "Intense drug war thriller" },
    { title: "The Silence of the Lambs", year: 1991, reason: "Classic serial killer thriller" },
    { title: "The Sixth Sense", year: 1999, reason: "Supernatural thriller with famous twist" },
    { title: "Fight Club", year: 1999, reason: "Psychological thriller with twist ending" },
    { title: "The Usual Suspects", year: 1995, reason: "Crime thriller with legendary twist" },
    { title: "Parasite", year: 2019, reason: "Class thriller with dark turns" },
    { title: "Nightcrawler", year: 2014, reason: "Dark character study thriller" },
    { title: "The Departed", year: 2006, reason: "Crime thriller with double agents" },
  ],
  "horror": [
    { title: "Get Out", year: 2017, reason: "Social horror with brilliant twists" },
    { title: "A Quiet Place", year: 2018, reason: "Tense survival horror with minimal dialogue" },
    { title: "Hereditary", year: 2018, reason: "Disturbing family horror with incredible acting" },
    { title: "The Conjuring", year: 2013, reason: "Classic haunted house with effective scares" },
    { title: "It Follows", year: 2014, reason: "Unique horror concept with creepy atmosphere" },
    { title: "The Witch", year: 2015, reason: "Period horror with slow-burn dread" },
    { title: "The Shining", year: 1980, reason: "Iconic psychological horror" },
    { title: "The Exorcist", year: 1973, reason: "Terrifying possession horror" },
    { title: "28 Days Later", year: 2002, reason: "Zombie apocalypse with intensity" },
    { title: "The Ring", year: 2002, reason: "J-horror remake with creepy imagery" },
    { title: "Sinister", year: 2012, reason: "Found footage horror with scares" },
    { title: "Insidious", year: 2010, reason: "Haunted house with jump scares" },
    { title: "The Babadook", year: 2014, reason: "Psychological horror about grief" },
    { title: "Midsommar", year: 2019, reason: "Daylight horror with cult" },
    { title: "The Descent", year: 2005, reason: "Claustrophobic cave horror" },
    { title: "It", year: 2017, reason: "Stephen King adaptation with scares" },
  ],
  "romance": [
    { title: "Eternal Sunshine of the Spotless Mind", year: 2004, reason: "Unique romance about memory and love" },
    { title: "La La Land", year: 2016, reason: "Musical romance with stunning cinematography" },
    { title: "The Notebook", year: 2004, reason: "Classic romantic drama that tugs heartstrings" },
    { title: "Before Sunrise", year: 1995, reason: "Intimate conversation-driven romance" },
    { title: "500 Days of Summer", year: 2009, reason: "Modern romance with non-linear storytelling" },
    { title: "Pride and Prejudice", year: 2005, reason: "Beautiful period romance adaptation" },
    { title: "Call Me By Your Name", year: 2017, reason: "Italian summer romance" },
    { title: "Her", year: 2013, reason: "Futuristic AI romance" },
    { title: "Crazy Stupid Love", year: 2011, reason: "Ensemble romantic comedy" },
    { title: "Amelie", year: 2001, reason: "Whimsical French romance" },
    { title: "Silver Linings Playbook", year: 2012, reason: "Mental health romantic drama" },
    { title: "The Shape of Water", year: 2017, reason: "Fantasy romance fairy tale" },
    { title: "About Time", year: 2013, reason: "Time travel romance with heart" },
    { title: "Atonement", year: 2007, reason: "Tragic wartime romance" },
    { title: "Brooklyn", year: 2015, reason: "Immigration romance drama" },
    { title: "Titanic", year: 1997, reason: "Epic romantic disaster film" },
  ],
};

const allMoviesList = Object.values(movieDatabase).flat();

function detectGenre(query) {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes("sci") || lowerQuery.includes("science") || lowerQuery.includes("inception") || lowerQuery.includes("mind")) {
    return "sci-fi";
  }
  if (lowerQuery.includes("drama") || lowerQuery.includes("emotional") || lowerQuery.includes("shawshank")) {
    return "drama";
  }
  if (lowerQuery.includes("action") || lowerQuery.includes("fight") || lowerQuery.includes("explosive")) {
    return "action";
  }
  if (lowerQuery.includes("comedy") || lowerQuery.includes("funny") || lowerQuery.includes("laugh")) {
    return "comedy";
  }
  if (lowerQuery.includes("thriller") || lowerQuery.includes("suspense") || lowerQuery.includes("mystery")) {
    return "thriller";
  }
  if (lowerQuery.includes("horror") || lowerQuery.includes("scary") || lowerQuery.includes("creepy")) {
    return "horror";
  }
  if (lowerQuery.includes("romance") || lowerQuery.includes("love") || lowerQuery.includes("romantic")) {
    return "romance";
  }
  
  return "drama";
}

function findMovieByName(query) {
  const lowerQuery = query.toLowerCase();
  return allMoviesList.find(movie => 
    lowerQuery.includes(movie.title.toLowerCase())
  );
}

export function getLocalRecommendations(query) {
  const foundMovie = findMovieByName(query);
  
  if (foundMovie) {
    const genre = detectGenre(foundMovie.title + " " + query);
    const genreMovies = movieDatabase[genre] || movieDatabase["drama"];
    const otherGenres = Object.keys(movieDatabase).filter(g => g !== genre);
    const additionalMovies = otherGenres.flatMap(g => movieDatabase[g].slice(0, 3));
    
    return [foundMovie, ...genreMovies.filter(m => m.title !== foundMovie.title), ...additionalMovies].slice(0, 18);
  }
  
  const genre = detectGenre(query);
  const primaryGenre = movieDatabase[genre] || movieDatabase["drama"];
  const otherGenres = Object.keys(movieDatabase).filter(g => g !== genre);
  const additionalMovies = otherGenres.flatMap(g => movieDatabase[g].slice(0, 2));
  
  return [...primaryGenre, ...additionalMovies].slice(0, 18);
}
