'use client'
import { useAppSelector } from '@/src/hooks/redux'
import React, { useEffect } from 'react'

export const PaymentResult: React.FC = () => {
  const stateInfo = useAppSelector((state) => state)
  const [color, setColor] = React.useState('')

  useEffect(() => {
    if (stateInfo.balance.method === 'USD' && stateInfo.balance.usd >= stateInfo.products.totalPriceCart) {
      setColor('text-green-600')
    } else if (stateInfo.balance.method === 'Coins' && stateInfo.balance.coins >= stateInfo.products.totalPriceCart) {
      setColor('text-green-600')
    } else {
      setColor('text-red-600')
    }
  }, [stateInfo.balance.coins, stateInfo.balance.method, stateInfo.balance.usd, stateInfo.products.totalPriceCart])

  return (
    <div>
      <div>
        <p className='block text-sm font-medium text-gray-900'>Balance:</p>
        <p className='block text-sm font-medium text-green-600 ml-1'>{stateInfo.balance.method === 'USD' ? `${stateInfo.balance.usd.toFixed(2)} $` : `${stateInfo.balance.coins.toFixed(2)} coins`}</p>
      </div>
      <div>
        <p className='block text-sm font-medium text-gray-900'>Total price:</p>
        <p className='block text-sm font-medium text-green-600 ml-1'>{stateInfo.products.totalPriceCart.toFixed(2)} $</p>
      </div>
      <div>
        <p className='block text-sm font-medium text-gray-900'>Amount of balance:</p>
        <p className={`block text-sm font-medium ml-1 ${color}`}>{stateInfo.balance.method === 'USD' ? `${(stateInfo.balance.usd - stateInfo.products.totalPriceCart).toFixed(2)} $` : `${(stateInfo.balance.coins - stateInfo.products.totalPriceCart).toFixed(2)} coins`}</p>
      </div>
    </div>
  )
}
