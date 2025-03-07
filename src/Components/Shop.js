import React from 'react'

import { useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../State/index'
const Shop = () => {
    const dispatch =  useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
    const amount = useSelector(state=> state.amount)
  return (
    <>
    <h1 className='text-center text-3xl mx-4 mt-4 font-bold text-orange-500'>Buy Anything from my Shop</h1>
    <h1 className='text-center text-3xl mx-4 mt-4'>Deposite/Widthdraw Money</h1>
    <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-2 px-4 ">
    <div className='flex justify-center items-center my-2 bg-gray-100 p-6'>
        
      <button onClick={()=>{withdrawMoney(41800)}} className="btn btn-primary mx-2">-</button>
      iPhone X Price: 41800
      <button onClick={()=>{depositMoney(41800)}} className="btn btn-primary mx-2">+</button>
    </div>

    <div className='flex justify-center items-center my-2 bg-gray-100 p-6'>
      <button onClick={()=>{withdrawMoney(18500)}} className="btn btn-primary mx-2">-</button>
      AirPods Price: 18500
      <button onClick={()=>{depositMoney(18500)}} className="btn btn-primary mx-2">+</button>
    </div>

    <div className='flex justify-center items-center my-2 bg-gray-100 p-6'>
        
      <button onClick={()=>{withdrawMoney(1350)}} className="btn btn-primary mx-2">-</button>
      T-Shirt Price: 950
      <button onClick={()=>{depositMoney(1350)}} className="btn btn-primary mx-2">+</button>
    </div>

    <div className='flex justify-center items-center my-2 bg-gray-100 p-6'>
      <button onClick={()=>{withdrawMoney(2450)}} className="btn btn-primary mx-2">-</button>
      Shoes Price: 2450
      <button onClick={()=>{depositMoney(2450)}} className="btn btn-primary mx-2">+</button>
    </div>
    </div>
    </>
  )
}

export default Shop
