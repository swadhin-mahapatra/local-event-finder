import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FavoritesPage from "./pages/FavoritesPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CreateEvent from "./pages/CreateEvent";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./index.css";

// ✅ Route protection for logged-in users
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar /> {/* ✅ Always visible */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/events"
            element={
              <PrivateRoute>
                <Events />
              </PrivateRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-event"
            element={
              <PrivateRoute>
                <CreateEvent />
              </PrivateRoute>
            }
          />

          {/* Invalid routes → Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
