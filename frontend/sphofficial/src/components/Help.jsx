import React from 'react';
import { MdArrowForward,MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Help = () => {
  const helpItems = [
    { title: 'R&R', to: '/rr' },
    { title: 'About Deposit', to: '/deposit' },
    { title: 'About Withdraw', to: '/about-withdraw' },
    { title: 'About Pending & On Hold', to: '/about-pending' },
    { title: 'About Commercial Ads', to: '/about-ads' },
    { title: 'About Golden Egg Bonus', to: '/about-bonus' }
  ];

  return (
    <div className="p-6 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-dark">
        <Link to='/account'>
        
        <MdArrowBack className='inline mr-3 font-extrabold'/> 
        </Link>
        Help
        </h2>
      <div className="space-y-4 flex flex-col  justify-center items-center">
        {helpItems.map((item, index) => (
          <div key={index} className="flex  space-x-10 justify-between items-start bg-gray-400 rounded-3xl p-4 w-100">
            <span className="text-lg">{index+1}.</span>
            <span className="text-lg">{item.title}</span>
            <span className="text-orange-500 text-xl"> 
              <Link to={item.to}>
              <MdArrowForward/>
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;