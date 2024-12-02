import { createContext, useState, useContext, useEffect } from "react";

// Create a Context for managing movie-related state
const MovieContext= createContext()

// Custom hook to access the MovieContext
export const useMovieContext = () => useContext(MovieContext)

// MovieProvider component that provides the movie context to the children components
export const MovieProvider = ({children}) => {
     // State to store the list of favorite movies
    const [favorites, setFavorites] = useState([])

    // Effect hook to load the favorites from localStorage when the component mounts
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

         // If favorites are found in localStorage, set them to the state
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    // Effect hook to update localStorage whenever the favorites state changes
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    // Function to add a movie to the favorites list
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

     // Function to remove a movie from the favorites list by movie ID
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    // Function to check if a movie is already in the favorites list
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    // Context value to provide the necessary state and functions to other components
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    // Return the provider that will wrap the app components and give them access to the context
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}