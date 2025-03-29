// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

import LuxuryHotelPage from './pages/LuxuryHotel';
import AccountPage from './pages/Account';
import Start from './pages/Start';

export default function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/luxury-hotel" element={<LuxuryHotelPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/start" element={<Start/>} />
      </Routes>
    </Router>
  );
}