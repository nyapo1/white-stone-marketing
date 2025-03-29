import React from 'react';
import Navbar from '../components/Navbar';

const Start = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-start flex-grow pt-25">
        <h1 className="text-white text-4xl font-bold text-center mb-4">
          Discover popular newly opened hotel rooms
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Immediate discount. Book and check in now to enjoy a wonderful night.
        </p>
        <div className="flex space-x-4 mb-6">
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
            Account details
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
            Order records
          </button>
        </div>
        <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-500">
          Search for check-in
        </button>
      </div>
    </div>
  );
};

export default Start;