'use client'
import { useAppSelector } from '@/src/hooks/redux'
import React, { useEffect } from 'react'

export const PaymentResult: React.FC = () => {
  const stateInfoBalance = useAppSelector((state) => state.balance)
  const stateInfoProducts = useAppSelector((state) => state.products)
  const [color, setColor] = React.useState('')

  useEffect(() => {
    if (stateInfoBalance.method === 'USD' && stateInfoBalance.usd >= stateInfoProducts.totalPriceCart) {
      setColor('text-green-600')
    } else if (stateInfoBalance.method === 'Coins' && stateInfoBalance.coins >= stateInfoProducts.totalPriceCart) {
      setColor('text-green-600')
    } else {
      setColor('text-red-600')
    }
  }, [stateInfoBalance.coins, stateInfoBalance.method, stateInfoBalance.usd, stateInfoProducts.totalPriceCart])

  return (
    <div>
      <div>
        <p className='block text-sm font-medium text-gray-900'>Balance:</p>
        <p className='block text-sm font-medium text-green-600 ml-1'>{stateInfoBalance.method === 'USD' ? `${stateInfoBalance.usd.toFixed(2)} $` : `${stateInfoBalance.coins.toFixed(2)} coins`}</p>
      </div>
      <div>
        <p className='block text-sm font-medium text-gray-900'>Total price:</p>
        <p className='block text-sm font-medium text-green-600 ml-1'>{stateInfoProducts.totalPriceCart.toFixed(2)} $</p>
      </div>
      <div>
        <p className='block text-sm font-medium text-gray-900'>Amount of balance:</p>
        <p className={`block text-sm font-medium ml-1 ${color}`}>{stateInfoBalance.method === 'USD' ? `${(stateInfoBalance.usd - stateInfoProducts.totalPriceCart).toFixed(2)} $` : `${(stateInfoBalance.coins - stateInfoProducts.totalPriceCart).toFixed(2)} coins`}</p>
      </div>
    </div>
  )
}
