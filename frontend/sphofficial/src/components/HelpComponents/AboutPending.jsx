
import React from 'react';
import { MdArrowForward,MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutPending = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
        <Link to='/help'>
        <MdArrowBack className='text-dark text-3xl mr-3'/>
        </Link>
        About Pending & On Hold
        </h1>
      <p>
        All received but unsubmitted orders will be marked as "Pending." To
        complete these orders, simply navigate to the "Orders" section and
        click the corresponding button.
      </p>
      <p>
        In cases where a "Commercial Ads" has been assigned, your search orders
        may be temporarily frozen. The processing amount will be released upon
        successful completion of the commercial ads.
      </p>
      <h2 className="font-semibold mt-4">Important Notes:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          If you are unable to complete a commercial ad within 72 hours and fail
          to notify customer service or request an extension, your account will
          be temporarily frozen.
        </li>
        <li>
          To reactivate your account, please contact customer service for
          assistance in lifting the frozen status.
        </li>
      </ul>
    </div>
  );
};

export default AboutPending;