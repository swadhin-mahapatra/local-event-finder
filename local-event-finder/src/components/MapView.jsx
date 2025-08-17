// MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icons not loading in some builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapView = ({ events }) => {
  // Ensure we have at least a default center
  const defaultPosition = [20.5937, 78.9629]; // India center

  // Pick first event’s coordinates if available
  const firstEvent =
    events && events.length > 0
      ? [events[0].latitude || 20.5937, events[0].longitude || 78.9629]
      : defaultPosition;

  return (
    <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden mb-4">
      <MapContainer
        center={firstEvent}
        zoom={5}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {events &&
          events.map((event, index) => (
            <Marker
              key={index}
              position={[event.latitude || 20.5937, event.longitude || 78.9629]}
            >
              <Popup>
                <strong>{event.name}</strong>
                <br />
                {event.city || "Unknown"}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
