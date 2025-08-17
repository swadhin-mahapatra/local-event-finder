import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/login";
import Signup from "./pages/signup";
import FavoritesPage from "./pages/FavoritesPage"; 
import { FavoritesProvider } from "./context/FavoritesContext"; // ✅ wrap everything
import "./index.css";

// Protects routes if user is not logged in
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/" />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ✅ Wrap whole app with FavoritesProvider */}
      <FavoritesProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private routes */}
          <Route
            path="/app"
            element={
              <PrivateRoute>
                <App />
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
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
