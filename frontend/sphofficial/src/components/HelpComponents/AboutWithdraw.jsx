// src/components/AboutWithdraw.js
import React from 'react';
import { MdArrowForward,MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';


const AboutWithdraw = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        <Link to='/help'>
        <MdArrowBack className='text-dark text-3xl mr-3'/>
        </Link>
        About Withdraw
      </h1>
 
      <p className='mt-5'>
        Before submitting a withdrawal request, please ensure that your preferred
        withdrawal method is properly linked to your account on the platform.
        Follow these steps to complete your withdrawal:
      </p>
      <ol className="list-decimal list-inside my-4">
        <li className='mt-5'>
          Make sure to bind your chosen withdrawal method to the platform in
          advance to avoid any delays.
        </li>
        <li className='mt-5'>
          Click the "Withdraw" button, enter the desired withdrawal amount, and
          input your "withdrawal" password to initiate the process.
        </li>
      </ol>
      <p className='mt-5'>
        The exact time for the funds to reflect in your account is subject to
        the processing time of the exchange.
      </p>
      <p className='mt-5'>
        Withdrawal requests can be processed between 10:00 AM and 10:00 PM
        daily. Please ensure to submit within this time frame for timely
        processing.
      </p>
    </div>
  );
};

export default AboutWithdraw;