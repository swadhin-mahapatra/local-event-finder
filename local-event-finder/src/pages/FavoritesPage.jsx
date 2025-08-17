import { useNavigate } from "react-router-dom";
import FavoritesList from "../components/FavoritesList";
import mockEvents from "../data/mockEvents.json";

const FavoritesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">⭐ My Favorites</h1>
      </div>

      {/* Favorites List with suggestions */}
      <FavoritesList suggestions={mockEvents} />
    </div>
  );
};

export default FavoritesPage;
