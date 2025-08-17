import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const EventList = ({ events }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="overflow-y-auto h-[50vh] p-4 space-y-4">
      {events.map((event) => {
        const isFavorite = favorites.some((f) => f.id === event.id);

        return (
          <div
            key={event.id}
            className="p-4 border rounded-xl shadow bg-white hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold">{event.name}</h3>
            <p className="text-sm text-gray-600">{event.description}</p>

            {/* Event date */}
            <p className="text-sm text-blue-600">
              {new Date(event.start).toLocaleString()}
            </p>

            {/* Location + Price */}
            <p className="text-sm text-gray-700">
              {event.city} • {event.price}
            </p>

            {/* Event link */}
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-500 underline block mb-2"
            >
              View Details
            </a>

            {/* ✅ Add/Remove Favorite button */}
            <button
              onClick={() => toggleFavorite(event)}
              className={`mt-2 px-3 py-1 rounded-md text-sm font-medium transition 
                ${isFavorite ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}
            >
              {isFavorite ? "Remove Favorite" : "Add Favorite"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
