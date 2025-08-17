import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src="/Thumbnail.png"
          alt="Events Banner"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Event Finder</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl text-center">
            Discover, create, and track events around you with ease 🎉
          </p>
        </div> */}
      </div>

      {/* Info Section */}
      <div className="py-12 px-6 md:px-20 text-center max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Why use Event Finder?</h2>
        <p className="text-gray-700 text-lg">
          Event Finder helps you explore upcoming events, save your favorites, create your own 
          events, and connect with people who share the same interests. Whether it’s music, 
          sports, or tech meetups – we’ve got it all covered!
        </p>
      </div>
    </div>
  );
};

export default Home;
