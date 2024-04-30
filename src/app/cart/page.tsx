import { TotalCartInfo } from '@/src/components/TotalCartInfo/TotalCartInfo'
import Breadcrumbs from '@/src/ui/breadcrumbs/Breadcrumbs'
import { Metadata } from 'next'
import React from 'react'

const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart page',
}

export default function Cart({children}: {children: React.ReactNode}) {
  return (
    <div className='min-h-screen bg-white p-4 text-black bg-gray-200'>
      <div className='w-full border border-slate-600 rounded-2xl p-4 max-w-7xl mx-auto bg-gray-100'>
        <Breadcrumbs />
        <div className='flex flex-col md:flex-row justify-between '>
          {children}
          <TotalCartInfo />
        </div>
      </div>
    </div>
  )
}
