// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import AccountPage from './pages/Account';
import Start from './pages/TaskPage';
import HelpPage from './pages/HelpPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/start" element={<Start/>} />
        <Route path="/help" element={<HelpPage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
}