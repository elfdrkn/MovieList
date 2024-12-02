// Import the `Link` component for navigation and the CSS for styling.
import { Link } from "react-router-dom";
import "../css/Navbar.css";

// Define the `NavBar` component to render the navigation bar.
function NavBar () {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="navbar-links">
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar;