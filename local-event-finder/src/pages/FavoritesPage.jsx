import { useNavigate } from "react-router-dom";
import FavoritesList from "../components/FavoritesList";

const FavoritesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">⭐ My Favorites</h1>
        {/* <button
          onClick={() => navigate("/app")}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700"
        >
          ⬅ Back to Home
        </button> */}
      </div>

      {/* Favorites List */}
      <FavoritesList />
    </div>
  );
};

export default FavoritesPage;
