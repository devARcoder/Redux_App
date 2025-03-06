import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 px-1 bg-gray-100">
        <div className="">
            <h1 className='text-md font-bold  md:text-xl'>Bank of AR</h1>
        </div>
        <div className="flex space-x-2 text-[15px] md:space-x-6 md:text-xl">
        <a href="/">Home</a>
        <a href="/">About</a>
        </div>
        <div className="btn">
            <button disabled={true} className="btn btn-primary text-xs md:text-md">Total RS: 1000</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
