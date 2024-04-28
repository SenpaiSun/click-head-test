'use client'
import { useAppSelector } from '@/src/hooks/redux'
import React from 'react'
import {ButtonNextStage} from '../../ui/buttonNextStage/ButtonNextStage'

export const TotalCartInfo = () => {
  const totalPrice = useAppSelector((state) => state.products.totalPriceCart)
  return (
    <div className='flex flex-col justify-between min-h-96'>
      <div className='flex flex-col '>
        <p className='text-end text-4xl font-bold text-green-400'>Total: </p>
        <p className='text-end text-4xl font-bold text-green-400'>{totalPrice.toFixed(2)} $</p>
      </div>
      <ButtonNextStage />
    </div>
  )
}
