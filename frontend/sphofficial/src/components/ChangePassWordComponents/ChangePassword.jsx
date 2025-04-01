import React, { useState } from 'react';
import { MdArrowForward,MdArrowBack, } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Settings = () => {
  

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">
        <Link to='/account'>
        <MdArrowBack className='mr-3 font-extrabold text-3xl'/>
        </Link>
        Settings
      </h2>
      <div className="bg-gray-300 rounded-2xl px-4 py-2 my-3">
        <Link to='/forget-password'>
        <div className="flex justify-between items-center cursor-pointer py-4">
          <span className="text-lg">Change Login Password</span>
          <MdArrowForward className='mr-3 font-extrabold text-3xl'/>
        </div>
        </Link>
       
      </div>
      <div className="bg-gray-300 rounded-2xl px-4 py-2 my-3">

        <Link to="/withdraw-password">  
        <div className="flex justify-between items-center cursor-pointer py-4">
          <span className="text-lg">Set Withdrawal Password</span>
          <MdArrowForward className='mr-3 font-extrabold text-3xl'/>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Settings;