import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

// Optional: Mock events to show as suggestions
import mockEvents from "../data/mockEvents.json";

export default function FavoritesList() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const getRandomEvents = (events, count) => {
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Show suggested events if no favorites exist
  const suggestedEvents =
    favorites.length === 0 ? getRandomEvents(mockEvents, 5) : [];

  return (
    <div className="space-y-6">
      {favorites.length > 0 ? (
        // Render actual favorite events
        favorites.map((event) => (
          <div
            key={event.id}
            className="p-4 border rounded-xl shadow bg-white hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold">{event.name}</h3>
            <p className="text-sm text-gray-600">{event.description}</p>
            <p className="text-sm text-blue-600">
              {new Date(event.start).toLocaleString()}
            </p>
            <p className="text-sm text-gray-700">
              {event.city} • {event.price}
            </p>

            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-500 underline block mb-2"
            >
              View Details
            </a>

            <button
              onClick={() => toggleFavorite(event)}
              className="mt-2 px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-600"
            >
              Remove Favorite
            </button>
          </div>
        ))
      ) : (
        <>
          <p className="text-center text-gray-500">
            No favorite events yet. Here are some suggestions:
          </p>

          {suggestedEvents.map((event) => (
            <div
              key={event.id}
              className="p-4 border rounded-xl shadow bg-white hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
              <p className="text-sm text-blue-600">
                {new Date(event.start).toLocaleString()}
              </p>
              <p className="text-sm text-gray-700">
                {event.city} • {event.price}
              </p>

              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-500 underline block mb-2"
              >
                View Details
              </a>

              <button
                onClick={() => toggleFavorite(event)}
                className="mt-2 px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-600"
              >
                Add Favorite
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
