import React from 'react'
import DetailsNavbar from '../DetailsNavbar'
import { useState } from 'react';

const DetailsWithdraw = () => {

  const [transactions] = useState([
    { id: 1, type: 'Withdrawal', amount: 50.00, date: '2025-03-29 10:15:42' },
    { id: 2, type: 'Withdrawal', amount: 20.50, date: '2025-03-28 14:30:17' },
    { id: 3, type: 'Withdrawal', amount: 30.75, date: '2025-03-27 12:00:43' },
    { id: 4, type: 'Withdrawal', amount: 15.25, date: '2025-03-06 11:50:22' },
]);


  return (
    <div>
      <DetailsNavbar/>
      <div className="p-4">
        <h2 className="text-xl font-bold text-center">Withdrawals</h2>
        <div className="mt-4 flex flex-col justify-center items-center">
            {transactions.map(transaction => (
            <div key={transaction.id} className="border-b py-2lg:w-3xl md:w-md sm:w-sm text-center">
                <div className="flex justify-between mt-2">
                  <span className='font-bold'>{transaction.type}</span>
                  <span className='text-lg font-semibold text-red-500'>
                  -${transaction.amount.toFixed(2)} {/* Negative for withdrawals */}
                  </span>
                </div>
                <div className="flex justify-end mt-2">
                    Date: <span className='ml-3 text-gray-500'>{transaction.date}</span>
                </div>
            </div>
            ))}
        </div>
        <p className='text-center mt-5'>-No More-</p>
        </div>

    </div>
  )
}

export default DetailsWithdraw
