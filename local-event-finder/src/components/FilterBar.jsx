// src/components/FilterBar.jsx
import { useState } from "react";

const FilterBar = ({ events, onFilter }) => {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(""); // ✅ New state for Free/Paid

  // ✅ Extract unique values safely
  const cities = [...new Set(events?.map((e) => e.city).filter(Boolean))];
  const types = [...new Set(events?.map((e) => e.type).filter(Boolean))];
  const prices = [...new Set(events?.map((e) => e.price).filter(Boolean))]; // ✅ Free/Paid values

  const handleApplyFilter = () => {
    onFilter({ city, type, price });
  };

  return (
    <div className="sticky top-0 z-40 bg-gray-100 border-b shadow-md p-4 flex flex-col md:flex-row items-center gap-4">
      {/* City Dropdown */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-auto"
      >
        <option value="">All Cities</option>
        {cities.map((c, idx) => (
          <option key={idx} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Type Dropdown */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-auto"
      >
        <option value="">All Types</option>
        {types.map((t, idx) => (
          <option key={idx} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* Free or Paid Dropdown */}
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-auto"
      >
        <option value="">All Prices</option>
        {prices.map((p, idx) => (
          <option key={idx} value={p}>
            {p}
          </option>
        ))}
      </select>

      {/* Apply Filter Button */}
      <button
        onClick={handleApplyFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default FilterBar;
