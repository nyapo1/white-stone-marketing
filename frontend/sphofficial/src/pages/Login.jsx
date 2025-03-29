// pages/Login.js
import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phone || !password) {
      toast.error('Please fill all fields');
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
            <label className="block text-gray-700 mb-2">+1 Enter Phone Number</label>
            <div className="flex items-center">
              <FiPhone className="absolute left-3 text-gray-400" />
              <input
                type="tel"
                className="pl-10 pr-4 py-2 w-full border rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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