import { CartItem } from '@/src/components/CartItem/CartItem'
import { TotalCartInfo } from '@/src/components/TotalCartInfo/TotalCartInfo'
import Breadcrumbs from '@/src/ui/breadcrumbs/Breadcrumbs'
import { Metadata } from 'next'
import React from 'react'

const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart page',
}

export default function Basket() {
  return (
    <div className='min-h-screen bg-white p-4 text-black bg-gray-200'>
      <div className='w-full border border-slate-600 rounded-2xl p-4 max-w-7xl mx-auto bg-gray-100'>
        <Breadcrumbs />
        <h1 className='text-start text-3xl font-bold m-4'>Products:</h1>
        <div className='flex flex-row justify-between '>
          <CartItem />
          <TotalCartInfo />
        </div>
      </div>
    </div>
  )
}
