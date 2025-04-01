import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Select from 'react-select';
import { countryOptions } from './countryCode';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(countryOptions[0]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [invitationCode, setInvitationCode] = useState(''); // New state for invitation code
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setPhoneError('');
    setError('');
    setSuccess('');

    // Validate phone number input
    if (!/^\d+$/.test(phone)) {
      setPhoneError('Enter numbers only.');
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://your-backend-url/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          phone: countryCode.value + phone, 
          password, 
          invitationCode // Include invitation code in the request
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed.');
      }

      setSuccess('Account creation successful! Please log in.'); // Success message
      console.log('Signup successful:', data);
      navigate('/login'); // Redirect to login page after signup
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="p-8 rounded shadow-md w-lg h-screen flex flex-col justify-around"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1673029927496-a9b574091d12?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">White Stone Marketing</h2>
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSignup}>
            <div className="mb-4 flex">
              <Select
                options={countryOptions}
                value={countryCode}
                onChange={setCountryCode}
                className="flex-1 mr-2 bg-none"
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
            {phoneError && <p className="text-red-500">{phoneError}</p>}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Invitation Code" // New Invitation Code input
                value={invitationCode}
                onChange={(e) => setInvitationCode(e.target.value)}
                className="border border-gray-500 p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-500 p-2 rounded w-full"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-3 cursor-pointer"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
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
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button type="submit" className="bg-green-500 cursor-pointer text-white py-2 rounded w-full hover:bg-green-600">Sign Up</button>
          </form>
          <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-600">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;