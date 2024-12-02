// Import necessary styles and components
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/NavBar';
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from './contexts/MovieContext';

function App() { 

  return (
    // Wrapping the entire app with the MovieProvider context to provide global state
    <MovieProvider>
      {/* Navbar component that will be visible across all pages */}
        <Navbar />

        {/* Main content section */}
        <main className='main-content'>

        {/* Setting up routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
    
  );
}

export default App;
