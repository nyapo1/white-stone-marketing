
import React from 'react';
import { MdArrowForward,MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutAds = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        <Link to='/help'>
        <MdArrowBack className='text-dark text-3xl mr-3'/>
        </Link>
        
        About Commercial Ads
        </h1>
      <h2 className="font-semibold mb-2">What are Commercial Ads Orders?</h2>
      <p>
        Commercial Ads Orders are profit-generating advertisements focused on
        promoting hotel brands through booking platforms. These ads allow
        merchants to increase brand visibility and attract more customers. The
        primary goal is to support merchants in growing their customer base
        through targeted ad campaigns.
      </p>
      <h2 className="font-semibold mt-4">How Commercial Ads Orders Benefit Members</h2>
      <p>
        Commercial Ads Orders offer a unique opportunity for all members to
        earn extra commissions. Members can earn up to 9x commissions on
        these orders. Each account may encounter a minimum of 0 to a maximum
        of 3 Commercial Ads Orders per round.
      </p>
      <h2 className="font-semibold mt-4">Important Notes:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          When you receive a Commercial Ads Order, it must be completed to
          proceed. Upon completing the order, the "Processing" amount will
          reflect in your account assets.
        </li>
        <li>
          The amount shown in the account is the required deposit amount to
          continue completing orders.
        </li>
      </ul>
    </div>
  );
};

export default AboutAds;