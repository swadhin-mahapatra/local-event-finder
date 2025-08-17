import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState(""); // ✅ For message after submit

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here
    setFeedback("Thank you for contacting us. We will get back to you shortly.");
    // Optionally clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
      {feedback && (
        <p className="mt-4 text-green-600 font-medium">{feedback}</p>
      )}
    </div>
      </div>
    </div>

  );
};

export default Contact;
