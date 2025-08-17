import { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    city: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", formData);
    alert("✅ Event Created! (not yet saved to DB)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="p-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Event Name"
              className="border p-2 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Event Description"
              className="border p-2 rounded"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
            />
            <input
              type="date"
              className="border p-2 rounded"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
