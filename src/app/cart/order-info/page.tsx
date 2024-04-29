import { OrderInfo } from '@/src/components/OrderInfo/OrderInfo'
import { Metadata } from 'next'
import React from 'react'

const metadata: Metadata = {
  title: 'Order information',
  description: 'Order information page',
}

export default function OrderInformation() {
  return (
    <div className='flex flex-row justify-between w-full min-h-52'>
      <OrderInfo />
    </div>
  )
}
