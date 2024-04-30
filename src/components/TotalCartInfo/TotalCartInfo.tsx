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
    <div className='flex flex-col justify-start md:justify-between md:min-h-96 gap-4 md:gap-0 items-center md:items-end'>
      <div className='flex flex-row md:flex-col mt-4'>
        <p className='text-end text-3xl md:text-4xl font-bold text-green-400'>Total: </p>
        <p className='text-end text-3xl md:text-4xl font-bold text-green-400'>{totalPrice.toFixed(2)} $</p>
      </div>
      <ButtonNextStage />
    </div>
  )
}
