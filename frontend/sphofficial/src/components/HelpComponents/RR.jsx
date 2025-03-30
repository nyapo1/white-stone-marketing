import React from 'react';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Ad Orders:',
    content: `To place ad orders, access the relevant page and click "Search" to find matching orders. Once matched, complete the assigned order. Withdrawals can be processed within 30 minutes upon completion.`,
  },
  {
    title: 'Order Matching:',
    content: `All orders are randomly matched through our automated system. Orders can be claimed, controlled, or skipped.`,
  },
  {
    title: 'Commercial Orders:',
    content: `Each account can receive 0-3 commercial orders per round, offering a 9x commission. A maximum of 3 commercial orders can be assigned in a single round.`,
  },
  {
    title: 'Golden Eggs:',
    content: `Accounts can receive 0-3 golden egg rewards per round, which include both cash rewards and multiple commission orders. A maximum of 3 golden eggs can be obtained in one round.`,
  },
  {
    title: 'Deposit Confirmation:',
    content: `For ad orders from different merchants, if no deposit is made within 3 days, contact customer service to confirm the deposit details with the merchant.`,
  },
  {
    title: 'Platform Hours:',
    content: `The platform operates daily from 10:00 AM to 10:00 PM. Members can submit ad orders during these operational hours.`,
  },
  {
    title: 'Account Security:',
    content: `If you suspect your account has been used fraudulently, please contact customer service immediately. The platform will pursue legal action where necessary.`,
  },
  {
    title: 'Deposit Requirements:',
    content: `The minimum deposit amount is $50.`,
  },
  {
    title: 'Withdrawal Limits:',
    content: `If your withdrawal amount exceeds $30,000, you must inform customer service beforehand. Failure to do so will result in a 50% fee for security deposits.`,
  },
  {
    title: '',
    content: `For any further clarifications, please contact our online customer service team.`,
  },
];

const RR = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        <Link to="/help">
          <MdArrowBack className="text-dark text-3xl mr-3" />
        </Link>
        R&amp;R
      </h1>
      {sections.map((section, index) => (
        <div className="mb-6 bg-gray-300 px-4 py-2" key={index}>
          <h2 className="text-xl font-semibold">  {index+1  } . {section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default RR;