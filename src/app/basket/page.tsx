import { CartItem } from '@/src/components/CartItem/CartItem'
import Breadcrumbs from '@/src/ui/breadcrumbs/Breadcrumbs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart page',
}

export default function Basket() {
  return (
    <div className='min-h-screen bg-white p-4 text-black'>
      <div className='w-full border border-slate-600 rounded-2xl p-4'>
        <Breadcrumbs />
        <h1>Products:</h1>
        <div>
          <CartItem />
        </div>
      </div>
    </div>
  )
}
