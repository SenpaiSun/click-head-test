'use client'
import { useAppSelector } from '@/src/hooks/redux'
import React, { useEffect } from 'react'
import {ButtonNextStage} from '../../ui/buttonNextStage/ButtonNextStage'
import { Product } from '@/src/store/types'
import { useActions } from '@/src/hooks/action'

export const TotalCartInfo = () => {
  const { setTotalPriceCart } = useActions()
  useEffect(() => {
    const price = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '[]').reduce((acc: number, item: Product) => acc + item.price, 0) : 0
    setTotalPriceCart(price)
  }, [setTotalPriceCart])

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
