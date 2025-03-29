import React from 'react';

const Tasks = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center" 
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh', // Adjust height as needed
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="flex flex-col items-center justify-end flex-grow pt-25 ">
        <h1 className="text-white text-4xl font-bold text-center my-15">
          Find Top-Rated New Hotels
        </h1>
        <p className="text-gray-300 text-center my-6">
          Special Rate: Reserve now to enjoy a wonderful getaway.
        </p>
        <div className="flex space-x-4 my-6">
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
            Account details
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
            Order records
          </button>
        </div>
        <button className="bg-red-600 text-white px-6 py-3 my-5 rounded-3xl cursor-pointer hover:bg-red-500">
          Search for check-in
        </button>
      </div>
    </div>
  );
};

export default Tasks;