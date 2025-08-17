import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/home");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">🌐 Event Finder</h1>
      <div className="flex gap-6">
        {/* Always visible */}
        <Link to="/home" className="hover:text-yellow-400">Home</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:text-yellow-400">Login</Link>
            <Link to="/signup" className="hover:text-yellow-400">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/events" className="hover:text-yellow-400">Events</Link>
            <Link to="/favorites" className="hover:text-yellow-400">Favorites</Link>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
            <Link to="/create-event" className="hover:text-yellow-400">Create Event</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
