import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <section className="flex flex-wrap gap-3 mb-6" aria-label="Event Filters">
      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2"
      />
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="">All Categories</option>
        <option value="Music">Music</option>
        <option value="Technology">Technology</option>
        <option value="Sports">Sports</option>
      </select>
      <select
        name="price"
        value={filters.price}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Free/Paid</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>
      <select
        name="accessibility"
        value={filters.accessibility}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="">All Accessibility</option>
        <option value="Online">Online</option>
        <option value="Wheelchair Accessible">Wheelchair Accessible</option>
      </select>
      <input
        type="text"
        name="location"
        placeholder="Location..."
        value={filters.location}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2"
      />
    </section>
  );
};

export default Filters;
