// src/MembershipSlider.js
import React, { useEffect, useState } from 'react';

const memberships = [
  { title: 'NON MEMBERSHIP', color: 'bg-green-900' },
  { title: 'VIP MEMBERSHIP', color: 'bg-red-900' },
  { title: 'VVIP MEMBERSHIP', color: 'bg-yellow-300' },
  { title: 'SVIP MEMBERSHIP', color: 'bg-black' },
];

const MembershipSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % memberships.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className={`relative h-60 w-full rounded-lg overflow-hidden transition-all duration-500 ${memberships[currentIndex].color}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">{memberships[currentIndex].title}</h2>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {memberships.map((_, index) => (
          <span key={index} className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-700'}`}></span>
        ))}
      </div>
    </div>
  );
};

export default MembershipSlider;