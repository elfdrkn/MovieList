import "../css/MovieCard.css"; // Import the CSS file for styling the MovieCard component.
import { useMovieContext } from "../contexts/MovieContext"; // Import the context for managing favorite movies.

// Define the MovieCard component, which receives a `movie` object as a prop.
function MovieCard({movie}) {
    // Extract functions and data from the context to manage favorites.
    const { isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

    // Check if the current movie is already a favorite.
    const favorite = isFavorite(movie.id)

    // Event handler for the favorite button click.
    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) { // If the movie is already a favorite, remove it.
            removeFromFavorites(movie.id)
        } else {
            // If the movie is not a favorite, add it.
            addToFavorites(movie);
        }     
    }

    // Render the MovieCard component.
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard;