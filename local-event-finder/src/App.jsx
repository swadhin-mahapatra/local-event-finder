import { useEffect, useState } from "react";
import mockEvents from "./data/mockEvents.json";
import MapView from "./components/MapView";
import EventList from "./components/EventList";
import FilterBar from "./components/FilterBar";
import FavoritesList from "./components/FavoritesList";
import { FavoritesProvider } from "./context/FavoritesContext";
import axios from "axios";

const App = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://www.eventbriteapi.com/v3/events/search/?location.address=india&token=O4N77C3MGZ2BOGI5LWQC"
        );
        const data = response.data;

        const formattedEvents = data.events.map((event) => ({
          id: event.id,
          name: event.name.text,
          description: event.description?.text || "",
          start: event.start.local,
          end: event.end.local,
          url: event.url,
          city: event.venue?.address?.city || "Unknown",
          type: event.category_id || "General",
          latitude: event.venue?.latitude || 28.6139,
          longitude: event.venue?.longitude || 77.209,
          price: event.is_free ? "Free" : "Paid",
        }));

        setEvents(formattedEvents);
        setFilteredEvents(formattedEvents);
      } catch (error) {
        console.warn("⚠️ API failed, using fallback mockEvents", error);
        setEvents(mockEvents);
        setFilteredEvents(mockEvents);
      }
    };

    fetchEvents();
  }, []);

  const handleFilter = ({ city, type, price }) => {
    let filtered = [...events];
    if (city) filtered = filtered.filter((e) => e.city === city);
    if (type) filtered = filtered.filter((e) => e.type === type);
    if (price) filtered = filtered.filter((e) => e.price === price);
    setFilteredEvents(filtered);
  };

  return (
    <FavoritesProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Map */}
        <div className="w-full h-[400px]">
          <MapView events={filteredEvents} />
        </div>

        {/* FilterBar */}
        <FilterBar events={events} onFilter={handleFilter} />

        <div className="flex">
          {/* Events list */}
          <div className="flex-1 overflow-y-auto p-4">
            <EventList events={filteredEvents} />
          </div>

          {/* Sticky Favorites */}
          <div className="w-80 p-4 bg-white shadow-md sticky top-0 h-screen overflow-y-auto">
            <h2 className="text-xl font-bold mb-2">⭐ Favorites</h2>
            <FavoritesList />
          </div>
        </div>
      </div>
    </FavoritesProvider>
  );
};

export default App;
