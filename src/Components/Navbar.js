import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const amount = useSelector(state=> state.amount)
  return (
    <div>
      <div className="flex justify-between items-center py-2 px-1 bg-gray-100">
        <div className="">
            <h1 className='text-md font-bold  md:text-xl'>Bank of AR</h1>
        </div>
        <div className="flex space-x-2 text-[15px] md:space-x-6 md:text-xl">
        <p className='cursor-pointer hover:text-gray-500' >Home</p>
        <p className='cursor-pointer hover:text-gray-500'>About</p>
        </div>
        <div className="btn">
            <button disabled={true} className="btn btn-primary text-xs md:text-md">Total RS: {amount}</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
