import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import FavoritesPage from "./pages/FavoritesPage";
import Contact from "./pages/Contact";
import CreateEvent from "./pages/CreateEvent";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content */}
      <div className="flex-1">
        <Routes>
          {/* Default route redirect */}
          <Route path="/" element={<Navigate to="home" replace />} />

          <Route path="home" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="create-event" element={<CreateEvent />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
