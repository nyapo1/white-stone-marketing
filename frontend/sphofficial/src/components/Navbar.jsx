import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname); // State to keep track of the active link

  return (
    <nav className="flex items-center justify-center  fixed w-full px-6 py-4 bg-white shadow-sm">
      <div className="flex md:space-x-10 space-x-4 justify-between">
        <Link
          to="/"
          className={`font-bold md:text-3xl ${activeLink === '/' ? 'text-red-500 mb-2' : 'text-dark'}`}
          onClick={() => setActiveLink('/')}
        >
          Home
        </Link>
        <Link
          to="/start"
          className={`font-bold md:text-3xl ${activeLink === '/start' ? 'text-red-500 mb-2' : 'text-dark'}`}
          onClick={() => setActiveLink('/start')}
        >
          Start
        </Link>
        <Link
          to="/account"
          className={`font-bold md:text-3xl ${activeLink === '/account' ? 'text-red-500 mb-2' : 'text-dark'}`}
          onClick={() => setActiveLink('/account')}
        >
          My Account
        </Link>
      </div>
    </nav>
  );
}