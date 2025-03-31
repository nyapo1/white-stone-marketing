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
import RRPage from './pages/HelpComponentsPages/RRPage';
import DepositPage from './pages/HelpComponentsPages/DepositPage';
import AboutWithdrawPage from './pages/HelpComponentsPages/AboutWithdrawPage';
import AboutPendingPage from './pages/HelpComponentsPages/AboutPendingPage';
import AboutBonusPage from './pages/HelpComponentsPages/AboutBonusPage';
import AboutAdsPage from './pages/HelpComponentsPages/AboutAdsPage';
import WalletPage from './pages/DetailsPages/WalletPage';
import DetailsDepositPage from './pages/DetailsPages/DetailsDepositPage';
import DetailsWithdrawPage from './pages/DetailsPages/DetailsWithdrawPage';
import CommissionPage from './pages/DetailsPages/CommissionPage';

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
        <Route path="/rr" element={<RRPage/>} />
        <Route path="/deposit" element={<DepositPage/>} />
        <Route path="/about-withdraw" element={<AboutWithdrawPage/>} />
        <Route path="/about-pending" element={<AboutPendingPage/>} />
        <Route path="/about-ads" element={<AboutAdsPage/>} />
        <Route path="/about-bonus" element={<AboutBonusPage/>} />
        <Route path="/wallet" element={<WalletPage/>} />
        <Route path="/account-deposit" element={<DetailsDepositPage/>} />
        <Route path="/account-withdraw" element={<DetailsWithdrawPage/>} />
        <Route path="/commission" element={<CommissionPage/>} />
      </Routes>
    </Router>
  );
}