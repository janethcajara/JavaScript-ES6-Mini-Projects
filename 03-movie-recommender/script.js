// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Filter movies with rating ≥ 8
const filteredMovies = movies.filter(movie => movie.rating >= 8);

// Display filtered movies
const filteredListElement = document.getElementById('filtered-movies');
filteredMovies.forEach(movie => {
  const li = document.createElement('li');
  li.textContent = `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`;
  filteredListElement.appendChild(li);
});

filteredListElement.style.fontSize = "1.1rem";
filteredListElement.style.color = "blue";
filteredListElement.style.fontWeight = "bold";
filteredListElement.style.fontFamily = "Times New Roman";

// 2. Create a list of movie titles in the specified format
const formattedMovies = movies.map(movie => `"${movie.title} (${movie.genre}) - ${movie.rating} ⭐"`);

// Display formatted movie list
const formattedListElement = document.getElementById('formatted-movies');
formattedMovies.forEach(movieStr => {
  const li = document.createElement('li');
  li.textContent = movieStr;
  formattedListElement.appendChild(li);
});

formattedListElement.style.fontSize = "1.1rem";
formattedListElement.style.color = "green";
formattedListElement.style.fontWeight = "bold";
formattedListElement.style.fontFamily = "Times New Roman";

// 3. Create the recommend function
function recommend(movie, minRating = 8) {
  return movie.rating >= minRating;
}

// Function to display recommendation results on the webpage
function showRecommendations(movies, minRating = 8) {
  const resultsDiv = document.getElementById('recommendation-results');
  resultsDiv.innerHTML = ''; // Clear previous results
  movies.forEach(movie => {
    const isRecommended = recommend(movie, minRating);
    const p = document.createElement('p');
    p.textContent = `"${movie.title}" is ${isRecommended ? 'recommended' : 'not recommended'} (Rating: ${movie.rating})`;
    resultsDiv.appendChild(p);
  });

resultsDiv.style.fontSize = "1.1rem";
resultsDiv.style.color = "red";
resultsDiv.style.fontWeight = "bold";
resultsDiv.style.fontFamily = "Times New Roman";

}

// Call the function to display recommendations
showRecommendations(movies);

