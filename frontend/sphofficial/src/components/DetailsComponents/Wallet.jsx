import React from 'react'
import DetailsNavbar from '../DetailsNavbar'

const Wallet = () => {


    // Sample transaction data
    const transactions = [
      { id: 1, type: 'Task Principal', amount: -236, date: '2025-03-30 17:07:09', balance: 303.06 },
      { id: 2, type: 'Task Principal Return', amount: 196, date: '2025-03-28 18:36:42', balance: 107.06 },
      { id: 3, type: 'Receive a commission', amount: 0.6, date: '2025-03-28 16:38:42', balance: 106.46 },
      { id: 4, type: 'Task Principal', amount: -196, date: '2025-03-29 08:21:00', balance: 106.46 },
      { id: 5, type: 'Task Principal Return', amount: 270, date: '2025-03-28 17:44:17', balance: 376.46 },
      { id: 6, type: 'Trial Bonus IN', amount: 270, date: '2025-03-28 13:04:15', balance:0 },
      { id: 7, type: 'Registration Reward', amount: 0, date: '2025-03-28 13:04:15', balance: 0 },
    ];


  return (
    <div>
      <DetailsNavbar/>
      <div className="p-4">
          <h2 className="text-xl font-bold text-center">Transactions</h2>
          <div className="mt-4 flex flex-col justify-center items-center">
            {transactions.map(transaction => (
              <div key={transaction.id} className="border-b py-2 w-3xl max-md:w-md">
                <div className="flex justify-between mb-3">
                  <span className='font-bold'>{transaction.type}</span>
                  <span className={` text-lg font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
                  </span>
                </div>
                <div className="text-sm  flex justify-between">
                  <p className='text-gray-500'>
                 Date: {transaction.date} 
                  </p>
                  <div>
                    <span className=''>
                   Balance before changes: 
                    </span>
                   <span className='text-amber-600 ml-2'>
                    ${transaction.balance.toFixed(2)}
                    </span> 
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className='text-center mt-5'>-No More-</p>
        </div>
    </div>
  )
}

export default Wallet
