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
    <h1 className='text-center text-3xl mx-4 mt-4'>Deposite/Widthdraw Money</h1>
    <div className='flex justify-center items-center my-10'>
        
      <button onClick={()=>{withdrawMoney(15000)}} className="btn btn-primary mx-2">-</button>
      Update Balance ({amount})
      <button onClick={()=>{depositMoney(15000)}} className="btn btn-primary mx-2">+</button>
    </div>
    </>
  )
}

export default Shop
