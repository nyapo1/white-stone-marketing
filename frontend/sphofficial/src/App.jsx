// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/Account';
import Start from './pages/TaskPage';
import HelpPage from './pages/Account/HelpPage';
import AboutPage from './pages/Account/AboutPage';
import BindPage from './pages/Account/BindPage';
import TRC20Page from './pages/Account/TRC20Page';
import ERC20Page from './pages/Account/ERC20Page';
import USDCPage from './pages/Account/USDCPage';
import ETHPage from './pages/Account/ETHPage';
import WithdrawPage from './pages/Account/WithdrawPage';

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
        <Route path="/bind" element={<BindPage/>} />
        <Route path="/trc20" element={<TRC20Page/>} />
        <Route path="/erc20" element={<ERC20Page/>} />
        <Route path="/usdc" element={<USDCPage/>} />
        <Route path="/eth" element={<ETHPage/>} />
        <Route path="/withdraw" element={<WithdrawPage/>} />
      </Routes>
    </Router>
  );
}