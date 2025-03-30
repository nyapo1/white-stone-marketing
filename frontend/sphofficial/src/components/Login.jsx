import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

const countries = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
  // Add more countries as needed
];

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCountrySelect = (countryCode) => {
    setSelectedCountry(countryCode);
    setIsOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phone || !password) {
      toast.error('Please fill all fields');
      return;
    }
    // Login logic
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-20 p-6">
        <div className="flex justify-between mb-8">
          <h1 className="text-2xl font-bold">Travel Accommodation</h1>
          <button className="text-blue-600">Sign Up &gt;&gt;</button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Select Country</label>
            <div className="relative">
              <button 
                onClick={toggleDropdown} 
                className="flex items-center justify-between w-full p-3 border rounded-lg bg-gray-100"
              >
                <span>{selectedCountry} (Select Country)</span>
                <FaChevronDown />
              </button>
              {isOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10">
                  {countries.map((country) => (
                    <button 
                      key={country.code} 
                      onClick={() => handleCountrySelect(country.code)} 
                      className="w-full text-left p-3 hover:bg-gray-200"
                    >
                      {country.code} - {country.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Enter Phone Number</label>
            <div className="flex items-center">
              <FiPhone className="absolute left-3 text-gray-400" />
              <input
                type="tel"
                className="pl-10 pr-4 py-2 w-full border rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="text-blue-600 float-right mt-2">FORGET?</button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}