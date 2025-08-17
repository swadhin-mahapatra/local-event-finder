import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function EventCard({ event }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.id === event.id);
  console.log("Event:", event);
  console.log("Favorites:", favorites);
  console.log("isFavorite:", isFavorite);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{event.name}</h3>
      <p className="text-sm text-gray-600">{event.city} • {event.price}</p>
      <p className="text-xs text-gray-500">
        {new Date(event.start).toLocaleString()}
      </p>
      
      <button
        onClick={() => toggleFavorite(event)}
        className={`mt-2 px-3 py-1 rounded-md text-sm font-medium 
          ${isFavorite ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}
      >
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
}
