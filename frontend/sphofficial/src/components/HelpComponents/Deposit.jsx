
import React from 'react';
import { MdArrowForward,MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Deposit = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        <Link to='/help'>
        <MdArrowBack className='text-dark text-3xl mr-3'/>
        </Link>
        About Deposit
        
        </h1>
      <p className='mt-5'>
        Deposits can be made directly from the "Personal" page on the platform.
        Follow these steps to ensure a smooth transaction:
      </p>
      <ol className="list-decimal list-inside my-4 ">
        <li className='mt-5'>
          Navigate to the "Deposit" section and select your assigned customer
          service representative to initiate the deposit.
        </li>
        <li className='mt-5'>
          Complete the transfer to the designated deposit provider by customer
          service. After a successful transfer, please upload a screenshot of
          the transaction for verification.
        </li>
      </ol>
      <p className='mt-5'>
        If you encounter any issues during the deposit process, reach out to our
        online customer service team for assistance.
      </p>
      <p className='mt-5'>
        Given the high volume of messages and transactions, please double-check
        the deposit account details before you have the funds transferred to the
        platform. The platform may update the deposit details periodically.
      </p>
      <p className='mt-5'>
        If any discrepancies arise, or if you have questions regarding deposit
        account details, please contact our online customer service team for
        immediate support.
      </p>
      <p className='mt-5'>
        Note: Always ensure you are communicating with your assigned customer
        service representative to avoid errors during the deposit process.
      </p>
    </div>
  );
};

export default Deposit;