
import React from 'react';
import { MdArrowForward,MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutBonus = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        <Link to='/help'>
        <MdArrowBack className='text-dark text-3xl mr-3'/>
        </Link>
        About Golden Egg Bonus</h1>
      <p>
        Each account has the opportunity to receive 0-3 Golden Egg bonuses per
        round. These bonuses are divided into two types. You can earn up to
        $999 in cash rewards and multiple commission orders between 10x to 32x.
      </p>
      <p>
        A maximum of 3 Golden Egg bonuses can be awarded per round.
      </p>
    </div>
  );
};

export default AboutBonus;