import React from 'react'
import { Link } from 'react-router-dom' 

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1618066433976-58f19b08b01d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16 ml-8' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
        <div className='bg-white pb-7 py-5 px-4'>
            <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
