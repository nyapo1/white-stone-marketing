import React from 'react';
import { FaRegCalendarAlt, FaGift } from 'react-icons/fa';
import { VscSymbolVariable } from 'react-icons/vsc';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1742403949587-42a767b9ea5b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh', // Adjust height as needed
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color
  };

  return (
    <div style={heroStyle} className='pt-20'>
      <div className="flex justify-center space-x-6 ">
          <FaRegCalendarAlt className="text-red-500 text-4xl" />
          <FaGift className="text-red-500 text-4xl" />
          <VscSymbolVariable className="text-red-500 text-4xl" />
      </div>
      <div className="text-center">
        <h1 className="text-5xl  font-bold text-gray-900">Simple Luxury Hotel</h1>
        <p className="mt-4 text-2xl text-gray-900">Offers an experience of  high-end sophistication</p>
      </div>
      <div className="w-100 mx-auto mt-10 p-5 bg-gray-300 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2">
          <FaCalendarAlt className="inline mr-2" />
          Dates
        </label>
        <div className='w-full border border-gray-300 rounded-lg p-2 text-gray-700'>
        Oct 8 - Oct 11
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2">
          <FaUser className="inline mr-2" />
          Travelers
        </label>
        <div className='w-full border border-gray-300 rounded-lg p-2 text-gray-700'>
        2 travelers, 1 room
        </div>
      </div>
      <Link
          to="/start">
      <button className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer">
       Search
      </button>
      </Link>
    </div>
    </div>
  );
};

export default Hero;