'use client'
import Link from 'next/link'
import React from 'react'

export const OrderSuccessfully: React.FC = () => {
  const localOrders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders') || '[]') : 0
  const localOrderCurrent = localOrders[localOrders.length - 1]
  console.log(localOrders)
  console.log(localOrderCurrent)
  return (
    <div className='flex flex-col ml-4 flex h-auto justify-between border border-slate-600 rounded-2xl p-4 md:w-full md:min-h-52 gap-4'>
      <p className=' text-sm font-medium text-gray-900'>Your order has been successfully placed.</p>
      <p className='mt-2 h-max text-sm font-medium text-gray-900'>The product will be delivered to the address:</p>
      <p className='text-sm font-bold text-gray-900'>{localOrderCurrent.user.address}</p>
      <p className='text-sm font-medium text-gray-900'>Our courier will contact you at number:</p>
      <p className='text-sm font-bold text-gray-900'>{localOrderCurrent.user.phone}</p>
      <p className='text-sm font-medium text-gray-700'>You can view the order history by going to the <Link href={'/history'} className='font-bold underline hover:text-gray-500'>History section</Link></p>
    </div>
  )
}
