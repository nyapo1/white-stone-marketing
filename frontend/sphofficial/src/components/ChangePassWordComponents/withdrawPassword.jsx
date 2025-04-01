import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';


const WithdrawalPassword = () => {
  const [phone, setPhone] = useState('+1416****0725'); // Placeholder for the phone number
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true); // Track if it's the first time setting a password
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isFirstTime && !oldPassword) {
      setError('Please enter your old password.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const body = isFirstTime
      ? { newPassword } // Only new password for first time
      : { oldPassword, newPassword }; // Old and new password for changing

    try {
      const response = await fetch('https://your-backend-url/api/set-withdrawal-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to set password.');
      }

      setSuccess('Password set successfully!'); // Success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center flex justify-center items-center">
        <Link to='/change-password'>
        <MdArrowBack className='mr-3 text-3xl font-extrabold'/>
        </Link>
        Set Withdrawal Password
      </h2>
    <div className="p-6 max-w-lg mx-auto bg-gray-300">
      <p className="mb-2 text-center my-5">{phone}</p>
      <form onSubmit={handleSubmit}>
        {!isFirstTime && (
          <div className="mb-4 relative">
            <input
              type={showOldPassword ? 'text' : 'password'}
              placeholder="Please Enter The Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="border border-gray-500 p-2 rounded w-full"
              required
            />
            <span
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-2 top-3 cursor-pointer"
              title={showOldPassword ? 'Hide password' : 'Show password'}
            >
              {showOldPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        )}
        <div className="mb-4 relative">
          <input
            type={showNewPassword ? 'text' : 'password'}
            placeholder="Set Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border border-gray-500 p-2 rounded w-full"
            required
          />
          <span
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-2 top-3 cursor-pointer"
            title={showNewPassword ? 'Hide password' : 'Show password'}
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-500 p-2 rounded w-full"
            required
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-3 cursor-pointer"
            title={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {error && <p className="text-red-500 text-center my-1">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button type="submit" className="bg-green-500 cursor-pointer text-white py-2 rounded w-full hover:bg-green-600">
          Confirm The Changes
        </button>
      </form>
      <button
        onClick={() => setIsFirstTime(!isFirstTime)} // Toggle between first time and changing password
        className="mt-4 text-blue-600 text-center"
      >
        {isFirstTime ? 'Already have a password? Change it' : 'Set a password for the first time'}
      </button>
    </div>
    </div>
  );
};

export default WithdrawalPassword;