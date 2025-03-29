import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Loading from './Loading';


const hotelsData = [
  {
    name: "Maison Saint-Vincent By Maisons & Co",
    image: "https://images.unsplash.com/photo-1554009975-d74653b879f1?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Luxury Resort in Maldives",
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Exquisite Hotel in Vietnam",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Santorini Hotel with a View",
    image: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Modern Hotel Room",
    image: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Stylish Hotel Entrance",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cozy Hotel Room",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Relaxing Poolside",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Beachfront Resort",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Desert Retreat",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hotels = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleViewMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 3);
      setLoading(false);
    }, 1000); // Simulating a network request
  };

  return (
    <div className='mt-5 text-center'>
      <h1 className='text-dark text-3xl font-bold'>Be Your Own Guide</h1>
      <p>We select for you the best hotels</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        {hotelsData.slice(0, visibleCount).map((hotel, index) => (
          <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img src={hotel.image} alt={hotel.name} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h2 className='text-lg font-semibold'>{hotel.name}</h2>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="mt-4 text-gray-500">
        <Loading/>
        </p>}
      {visibleCount < hotelsData.length && !loading && (
        <button 
          className='mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 '
          onClick={handleViewMore}
        >
          View More
          <FaArrowRight className='ml-2 inline' />
        </button>
      )}
    </div>
  );
}

export default Hotels;