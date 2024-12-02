import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // State to hold the search input value
    const [movies, setMovies] = useState([]); // State to hold the list of movies to display
    const [error, setError] = useState(null); // State to handle error messages
    const [loading, setLoading] = useState(true); // State to track the loading state

    // useEffect hook to load popular movies on component mount
    useEffect(() => {
        // Fetch popular movies and update state
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies);
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }            
        };
        loadPopularMovies(); // Call function to load popular movies
    }, []); // Empty dependency array means this runs only once when the component mounts

    // Handle search form submission
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return; // Don't proceed if the search query is empty
        if (loading) return; // Don't perform search while movies are still loading

        setLoading(true); // Start loading indicator
        try {
            // Fetch search results from API and update the movies state
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null); // Reset any previous error messages
        } catch (err) {
            console.log(err);
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    };


    return ( 
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" placeholder="Search for movies..." className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="search-button">Search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div> 
                ) : ( 
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key= {movie.id} />                
            ))}
            </div> 
        )}        
        </div>
        );
}

export default Home;