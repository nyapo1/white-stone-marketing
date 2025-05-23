import React, { useState } from 'react';
import { MdArrowForward,MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ERC20 = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!walletAddress) {
      setErrorMessage('Address Cannot Be Empty');
      return;
    }

    if (!walletAddress.startsWith('0')) {
      setErrorMessage('The ERC20 network address must start with the number "0".');
      return;
    }

    try {
      const response = await fetch('YOUR_BACKEND_URL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: walletAddress }),
      });

      if (!response.ok) {
        throw new Error('Failed to bind address');
      }

      // Handle successful submission
      alert('Address bound successfully!');
      setWalletAddress('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold text-center mb-4 flex justify-center items-center">
        <Link to='/bind'>
        <MdArrowBack className='text-dark text-3xl mr-3'/>
        </Link>
        USDT ERC20
        </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-5 text-2xl font-medium text-dark text-center">Wallet address</label>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your ERC20 wallet address"
          />
          {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
        <div className="mb-4">
          <div className="text-sm text-gray-600">
            <p className='text-dark text-xl'>
            Instructions for binding ERC20 addresses:
            </p>
            <br />
            1. The ERC20 network address starts with the number "0", please check if your address is correct.
            <br />
            2. If the address you have bound is incorrect, you can contact customer service to rebind.
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-white bg-amber-500 rounded hover:bg-amber-600"
        >
          Bind
        </button>
      </form>
    </div>
  );
};

export default ERC20;