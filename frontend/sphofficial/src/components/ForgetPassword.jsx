import React, { useState } from 'react';
import Select from 'react-select'; // Make sure to install react-select
import { countryOptions } from './countryCode';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [countryCode, setCountryCode] = useState(countryOptions[0]); // Default to first option
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSendVerificationCode = async () => {
    setError('');
    setSuccess('');
    if (!phone) {
      setError('Please Enter Phone Number First');
      return;
    }
    
    try {
      const response = await fetch('https://your-backend-url/api/send-verification-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: countryCode.value + phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send verification code.');
      }

      setSuccess('Verification code sent successfully!'); // Success message
      console.log('Response from server:', data);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate passwords
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://your-backend-url/api/update-password', {
        method: 'PUT', // Change to PUT
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: countryCode.value + phone, verificationCode, newPassword }),
      });
    
      const data = await response.json();
    
      if (!response.ok) {
        throw new Error(data.message || 'An error occurred. Please try again.');
      }
    
      setSuccess('Password updated successfully!'); // Success message
      console.log('Response from server:', data);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded shadow-md w-lg h-screen flex flex-col justify-around"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1673029927496-a9b574091d12?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">White Stone Marketing</h2>
        <p className="mb-4 text-center">Fill in the password information</p>
    
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <Select
              options={countryOptions}
              value={countryCode}
              onChange={setCountryCode}
              className="flex-1 mr-2"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: 'transparent',
                  borderColor: 'gray',
                  boxShadow: 'none',
                  '&:hover': {
                    borderColor: 'gray',
                  },
                }),
              }}
            />
            <input
              type="number"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-500 p-2 rounded w-2/3"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="text"
              placeholder="Enter Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="border border-gray-500 p-2 rounded w-full"
              required
            />
            <button
              type="button"
              onClick={handleSendVerificationCode}
              className="ml-2 bg-green-500 p-2 rounded text-gray-700 cursor-pointer"
            >
              Send
            </button>
          </div>
          <div className="mb-4 relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              placeholder="Please Enter A New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-gray-500 p-2 rounded w-full"
              required
            />
            <span
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-2 top-2 cursor-pointer"
              title={showNewPassword ? 'Hide password' : 'Show password'}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="mb-6 relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Please Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-500 p-2 rounded w-full"
              required
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-2 cursor-pointer"
              title={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
          <button type="submit" className="bg-green-500 cursor-pointer text-white py-2 rounded w-full hover:bg-green-600">
            Confirm
          </button>
        </form>

        <div>
        <p className="mt-4 text-center">Wanna Go back to Login or Sign Up? <Link to="/login" className="text-blue-600">Log In</Link> or  <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;