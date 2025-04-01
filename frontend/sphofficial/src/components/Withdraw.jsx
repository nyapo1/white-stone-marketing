import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdArrowForward,MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Withdraw = () => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [amount, setAmount] = useState('');
  const [conversion, setConversion] = useState('$0.00 = 0 USDC');
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isAssetSelected, setIsAssetSelected] = useState(true);

  const assets = [
    { name: 'USDC', symbol: 'USDC' },
    { name: 'ETH', symbol: 'ETH' },
    { name: 'USDT ERC20', symbol: 'USDT ERC20' },
    { name: 'USDT TRC20', symbol: 'USDT TRC20' },
  ];

  // Set the first asset as selected on initial load
  useEffect(() => {
    setSelectedAsset(assets[0].symbol);
  }, []);

  const handleSelectAsset = (asset) => {
    setSelectedAsset(asset);
    setIsAssetSelected(true);
  };

  const handleAmountChange = (e) => {
    let value = e.target.value;

    if (isNaN(value) || value.trim() === '') {
      setAmount('');
      setConversion(`$0.00 = 0 ${selectedAsset}`);
      setIsValidAmount(false);
      return;
    }

    setAmount(value);
    setIsValidAmount(true);
    
    const conversionValue = value ? (parseFloat(value) * 1).toFixed(2) : '0.00';
    setConversion(`$${conversionValue} = ${conversionValue} ${selectedAsset}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedAsset) {
      setIsAssetSelected(false);
      return;
    }

    if (!amount) {
      setIsValidAmount(false);
      return;
    }

    try {
      const response = await fetch('YOUR_BACKEND_URL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ asset: selectedAsset, amount }),
      });

      if (!response.ok) {
        throw new Error('Withdrawal failed');
      }

      // Show success message
      toast.success('Withdrawal successful!');

      // Reset fields
      setAmount('');
      setSelectedAsset(assets[0].symbol);
      setConversion('$0.00 = 0 USDC');
    } catch (error) {
      // Show error message
      toast.error(error.message || 'An error occurred.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 rounded-lg shadow-lg bg-gray-300">
      <h2 className="text-xl font-bold text-center mb-4 flex justify-center items-center">
        <Link to='/account'>
        <MdArrowBack className='text-dark text-3xl mr-3'/>
        </Link>
        Withdraw
        </h2>
      <div className="text-center mb-4">My assets:
        <p className='text-dark text-3xl'> $3.06</p>
      </div>

      <p className='text-md text-dark text-center mb-5'> Choose one Asset from below to Withdraw</p>

      <div className="mb-4">
        {assets.map((asset) => (
          <div
            key={asset.symbol}
            className={`flex items-center justify-between p-3 border-gray-500 rounded-lg mb-2 cursor-pointer ${selectedAsset === asset.symbol ? 'bg-gray-200' : 'bg-white'}`}
            onClick={() => handleSelectAsset(asset.symbol)}
          >
            <span className="text-lg">{asset.name}</span>
            {selectedAsset === asset.symbol && <span className="text-green-900">✓</span>}
          </div>
        ))}
      </div>
      
      {!isAssetSelected && <p className="text-red-500 text-sm mb-2">Please choose one asset above</p>}

      <form onSubmit={handleSubmit} className='my-5'>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          className={`w-full p-2 border ${isValidAmount ? 'border-gray-500' : 'border-red-500'} rounded-md mb-1`}
          placeholder="Enter amount"
        />
        {!isValidAmount && <p className="text-red-500 text-sm mb-2 " >Please input the amount in numbers only </p>}
        <div className="text-sm text-gray-600 my-3">{conversion}</div>

        <button 
          type="submit" 
          className="w-full px-4 py-2 mt-3 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Withdraw
        </button>
      </form>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Withdraw;