import React from 'react'
import DetailsNavbar from '../DetailsNavbar'
import { useState } from 'react';

const Commission = () => {
    // Sample dynamic transaction data (this could come from an API in a real app)
    const [transactions] = useState([
      { id: 1, type: 'Receipt Commission', amount: 0.60, date: '2025-03-29 18:36:42' },
      { id: 2, type: 'Receipt Commission', amount: 0.83, date: '2025-03-28 17:44:17' },
      { id: 3, type: 'Receipt Commission', amount: 0.78, date: '2025-03-27 23:30:43' },
      { id: 4, type: 'Receipt Commission', amount: 0.84, date: '2025-03-06 22:50:22' },
  ]);

  
  return (
    <div>
      <DetailsNavbar/>
      <div className="p-4">
            <h2 className="text-xl font-bold text-center">Transactions</h2>
            <div className="mt-4 flex flex-col justify-center items-center">
                {transactions.map(transaction => (
                    <div key={transaction.id} className="border-b py-2  text-center lg:w-3xl md:w-md sm:w-sm">

                        <div className="flex justify-between mt-2">
                          
                        <span className='font-bold mr-5'>{transaction.type}</span>
                        <span className='text-lg font-semibold text-green-500'>
                                ${transaction.amount.toFixed(2)}
                        </span>
                        </div>

                        <div className="flex justify-end mt-2 ">
                            
                           Date : <span className='ml-3 text-gray-500'>{transaction.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <p className='text-center mt-5'>-No More-</p>
        </div>

    </div>
  )
}

export default Commission
