import React from 'react';
import { FaDollarSign } from 'react-icons/fa'; // For USDC
import { SiEthereum } from 'react-icons/si'; // For ETH
import { TiTick } from 'react-icons/ti'; // For USDT
import { MdAttachMoney } from 'react-icons/md'; // For WISE
import { FiArrowRight } from 'react-icons/fi';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Bind = () => {
  const wallets = [
    { name: 'USDT TRC20', icon: <TiTick className="text-gray-300 text-3xl" /> ,to:'/trc20'},
    { name: 'USDT ERC20', icon: <MdAttachMoney className="text-gray-300 text-3xl" /> ,to:'/erc20'},
    { name: 'USDC', icon: <FaDollarSign className="text-gray-300 text-3xl" /> ,to:'/usdc'},
    { name: 'ETH', icon: <SiEthereum className="text-gray-300 text-3xl" /> ,to:'/eth'},
  ];

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 shadow-lg bg-gray-300">
      <h2 className="text-xl font-bold text-center mb-7 flex justify-center items-center">
        <Link to="/account">
          <MdArrowBack className='text-dark text-3xl mr-4' />
        </Link>
        Bind wallet address
      </h2>
      {wallets.map((wallet, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-400 rounded-3xl my-7">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 mr-2">
                  {wallet.icon}
            </div>
            <span className="text-lg">{wallet.name}</span>
          </div>
          <button className="px-3 py-1 text-3xl text-dark">
          <Link to={wallet.to}>
            <FiArrowRight />
          </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bind;