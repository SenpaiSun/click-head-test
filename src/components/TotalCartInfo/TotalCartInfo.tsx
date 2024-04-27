'use client'
import { useAppSelector } from '@/src/hooks/redux'
import React from 'react'

export const TotalCartInfo: React.FC = () => {
  const totalPrice = useAppSelector((state) => state.products.totalPriceCart)
  return (
    <div className='flex flex-col justify-between min-h-96'>
      <div className='flex flex-col '>
        <p className='text-end text-4xl font-bold text-green-400'>Total: </p>
        <p className='text-end text-4xl font-bold text-green-400'>{totalPrice.toFixed(2)} $</p>
      </div>
      <button className='border rounded border-green-700 w-52 h-16 bg-green-500 hover:bg-green-600 text-white text-2xl'>Next</button>
    </div>
  )
}
