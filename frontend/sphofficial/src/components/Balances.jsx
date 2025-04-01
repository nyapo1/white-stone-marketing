import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { FaRegCheckCircle,FaPowerOff, FaInfoCircle, FaGem, FaRegSquare,FaUser,FaLock , FaCalendarAlt, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logout from './LogOut';


const Balances = () => {
  return (
    <div className="px-6 pt-20 text-center">
    <div className="mb-8 flex justify-center items-center">
      <FaUser className='text-5xl mr-2'/>
      <div>
        <h2 className="text-2xl font-bold mb-2">416****0725</h2>
        <p className="text-gray-600">UID: 112350</p>
      </div>
    </div>

    <Link to='/withdraw'>
    <button className="w-50 cursor-pointer bg-amber-600 text-2xl text-white py-2 rounded-lg my-6 hover:bg-amber-500">
      Withdraw
    </button>
    </Link>


    <div className=" p-4 my-6 flex justify-center">

      <Link to="/bind">    
    <button className=' flex px-4 py-2 rounded-3xl border-2 justify-center items-center cursor-pointer border-amber-600 hover:bg-gray-200'>
        <p className='font-semibold text-2xl text-amber-700'> 
        Bind account
        </p>
        <FiArrowRight className="text-amber-900 ml-2 text-xl" />
    </button>
      </Link>
    </div>

    <div className="grid md:grid-cols-3 lg:grid-cols-6 max-md:grid-cols-2 mt-15">

      <Link to='/wallet'>
      <div className='flex flex-col  justify-center items-center my-5'>
      <FaRegCheckCircle className='text-amber-600 text-3xl mb-2 block'/>
      Details
      </div>
      </Link>

      <Link
      to='/help'
      > 
      <div className='flex flex-col  justify-center items-center my-5'>
    <FaRegSquare className='text-amber-600 text-3xl mb-2 block'/>
      Help
      </div>
      </Link>

      <Link to='/about'>
      
      <div className='flex flex-col  justify-center items-center my-5'>
    <FaInfoCircle className='text-amber-600 text-3xl mb-2 block'/>
      About Us
      </div>
      </Link>


      <Link to='/levels'>
        <div className='flex flex-col  justify-center items-center my-5'>
          <FaGem className='text-amber-600 text-3xl mb-2 block'/>
        LEVEL
        </div>
      </Link>

      <Link to='/login'>  
      <div className='flex flex-col  justify-center items-center my-5'>
    <FaCalendarAlt className='text-amber-600 text-3xl mb-2 block'/>
      Sign In
      </div>
      </Link>


    <Link to='/change-password'>
      <div className='flex flex-col  justify-center items-center my-5'>
    <FaLock className='text-amber-600 text-3xl mb-2 block'/>
      Change Passoword
      </div>
    </Link>

    </div>

  <Logout/>

  </div>
  )
}

export default Balances
