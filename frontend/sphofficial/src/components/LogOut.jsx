import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting)
    console.log('User logged out');
    // Example: localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className='mt-15 mb-5 cursor-pointer border-2 rounded-3xl border-red-500 px-3 py-2'
      >
        <p className='font-bold text-red-700 inline'>Log Out</p>
        <FaPowerOff className='inline ml-3 text-red-700'/>
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 ">
          <div className="bg-gray-400 p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white cursor-pointer py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setShowModal(false);
                }}
                className="bg-red-500 text-white cursor-pointer py-2 px-4 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;