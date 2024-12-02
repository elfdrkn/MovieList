import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

// Define the `Favorites` component to display the user's favorite movies.
function Favorites () {
    const {favorites} = useMovieContext(); // Access the favorites list from the context.

    // If there are favorite movies, render them in a grid.
    if (Array.isArray(favorites) && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
        {favorites.map((movie) => (
            <MovieCard movie={movie} key= {movie.id} /> 
            ))}
        </div>                
    </div> 
    );
} 
    // If `favorites` is empty or not an array, display the empty message.
    return (
        <div className="favorites-empty">
            <h2>No favorite Movies yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
        );    
}

export default Favorites;