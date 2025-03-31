import React from 'react'
import DetailsNavbar from '../DetailsNavbar'
import { useState } from 'react';

const DetailsDeposit = () => {

  const [transactions] = useState([
    { id: 1, type: 'Deposit', amount: 100.00, date: '2025-03-29 09:00:00' },
    { id: 2, type: 'Deposit', amount: 150.25, date: '2025-03-28 15:30:00' },
    { id: 3, type: 'Deposit', amount: 200.50, date: '2025-03-27 11:15:30' },
    { id: 4, type: 'Deposit', amount: 75.75, date: '2025-03-06 10:45:12' },
]);


  return (
    <div>
      <DetailsNavbar/>
      <div className="p-4">
                <h2 className="text-xl font-bold text-center">Deposits</h2>
                <div className="mt-4 flex flex-col justify-center items-center">
                    {transactions.map(transaction => (
                        <div key={transaction.id} className="border-b py-2  text-center  lg:w-3xl md:w-md sm:w-sm">
                            <div className="flex justify-between mt-2">
                                <span className='font-bold'>{transaction.type}</span>
                                <span className='text-lg font-semibold text-green-500'>
                                    +${transaction.amount.toFixed(2)} {/* Positive for deposits */}
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

export default DetailsDeposit
