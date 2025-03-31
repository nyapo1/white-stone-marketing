import React, { useState, useEffect } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const DetailsNavbar = () => {
  const location = useLocation(); // Get the current location
  const [activeItem, setActiveItem] = useState('Wallet'); // Default active item

  // Updated navItems with corresponding routes
  const navItems = [
    { name: 'Wallet', route: '/wallet' },
    { name: 'Commission', route: '/commission' },
    { name: 'Withdraw', route: '/account-withdraw' },
    { name: 'Deposit', route: '/account-deposit' },
  ];

  useEffect(() => {
    // Set active item based on current location
    const currentItem = navItems.find(item => item.route === location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location.pathname, navItems]);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <div className="flex p-4 justify-center items-center">
        <Link to='/account'>
          <MdArrowBack className='text-dark text-3xl mr-3'/>
        </Link>
        <h1 className="ml-4 text-3xl text-dark font-bold">Account details</h1>
      </div>
      <div className='flex justify-center'>
        <div className="flex justify-around text-lg bg-black lg:w-2xl md:w-md sm:w-sm p-2">
          {navItems.map(({ name, route }) => (
            <Link
              key={name}
              to={route}
              onClick={() => handleClick(name)}
              className={`relative text-white p-2 rounded ${activeItem === name ? 'hover:text-gray-300' : 'hover:text-gray-300'}`}
            >
              {name}
              {activeItem === name && <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsNavbar;