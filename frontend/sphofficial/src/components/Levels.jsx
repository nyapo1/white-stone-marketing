import React from 'react';
import MembershipSlider from './MembershipSlider';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const membershipData = [
  {
    title: 'NON MEMBERSHIP',
    progress: 0,
    color: 'bg-gray-400',
    description: 'No membership benefits.',
    rofitRate: '0.00%',
    assignments: 0,
    pointsPeriod: '365 days',
    bonus: 'No trial bonus available.',
  },
  {
    title: 'SVIP MEMBERSHIP',
    progress: 10,
    color: 'bg-black',
    description: 'Exclusive SVIP benefits.',
    rofitRate: '0.31%',
    assignments: 33,
    pointsPeriod: '365 days',
    bonus: '300 CAD trial bonus.',
  },
  {
    title: 'VIP MEMBERSHIP',
    progress: 20,
    color: 'bg-gray-300',
    description: 'Premium membership benefits.',
    rofitRate: '0.50%',
    assignments: 50,
    pointsPeriod: '365 days',
    bonus: '500 CAD trial bonus.',
  },
  {
    title: 'WIP MEMBERSHIP',
    progress: 30,
    color: 'bg-yellow-300',
    description: 'Work in progress membership.',
    rofitRate: '0.75%',
    assignments: 20,
    pointsPeriod: '365 days',
    bonus: '100 CAD trial bonus.',
  },
];

const MembershipLevel = () => {
  // You can replace this with dynamic logic to fetch the current membership
  const currentMembership = membershipData[1]; // Change index to select a different membership

  return (
    <div
      className="p-6 rounded-lg shadow-md max-w-lg mx-auto bg-black/50 min-h-screen flex flex-col justify-around"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674747087104-516a4d6d316c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className='text-center'>
        <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">

          <Link to='/account'>
          <MdArrowBack className='text-3xl font-extrabold mr-3'/>
          </Link>
          Your current level
          </h1>
        <p className='text-lg font-medium my-5'>{currentMembership.title}</p>
      </div>
      <div className={`${currentMembership.color} h-60 rounded-lg flex items-center justify-center relative mb-4`}>
        <MembershipSlider />
      </div>
      <div className="flex items-center mb-2">
        <div className="flex-grow h-2 bg-gray-400 rounded-full mr-2">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${(currentMembership.progress/40)*100}%` }}
          />
        </div>
        <span className="text-gray-900">{`${currentMembership.progress}/40`}</span>
      </div>
      <p className="text-gray-900">{`${40 - currentMembership.progress} more to upgrade to VIP`}</p>
      <div className="mt-4 text-gray-900">
        <p>Rofit rate: {currentMembership.rofitRate}</p>
        <p>Number of assignments: {currentMembership.assignments}</p>
        <p>Point Period: {currentMembership.pointsPeriod}</p>
        <p className="font-semibold">Level description:</p>
        <p>{currentMembership.bonus}</p>
      </div>
    </div>
  );
};

export default MembershipLevel;