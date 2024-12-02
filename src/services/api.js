// API key and base URL for The Movie Database API
const API_KEY = "449ac76a23e8a3cff497449a12be7269";
const BASE_URL = "https://api.themoviedb.org/3";

// Function to fetch popular movies
export const getPopularMovies = async () => {

    // Make a request to the API for popular movies
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

     // Parse the response to JSON format
    const data = await response.json()

    // Return the list of movies from the API response
    return data.results
};

// Function to search for movies based on a query
export const searchMovies = async (query) => {
    // Make a request to the API for movies matching the search query
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query
     )}`
    );

    // Parse the response to JSON format
    const data = await response.json()
    // Return the list of search results from the API response
    return data.results
};