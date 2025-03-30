// pages/Login.js
import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Login from '../components/Login';

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
    <Login/>
    </div>
  );
}