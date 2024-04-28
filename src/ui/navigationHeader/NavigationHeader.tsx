'use client'
import { useAppSelector } from '@/src/hooks/redux'
import Link from 'next/link'
import React from 'react'

export const NavigationHeader: React.FC = () => {
  const countToCartProducts = useAppSelector((state) => state.products.countToCart)
  return (
    <nav className='flex space-x-4 w-max'>
      <Link href={'/cart/products'} className='flex flex-row gap-1 space-x-0 text-center hover:opacity-70 color-hover-text'>
        <h1>Cart</h1>
        <div className='flex justify-center items-center w-5 h-5 bg-red-500 rounded-full text-xs'>
          <p className='m-auto'>{countToCartProducts}</p>
        </div>
      </Link>
      <div className='flex flex-row gap-1'>
        <p className='space-x-0 text-center'>
          Balance:
        </p>
        <div className='flex flex-row min-w-24 w-max border border-slate-600 rounded-2xl content-center items-center p-1'>
          <p className='h-full text-xs w-max border-r border-slate-600 pl-1 pr-1'>125 $</p>
          <p className='h-full text-xs w-max border-r border-slate-600 pl-1 pr-1 mr-1'>224 Coins</p>
          <button className='h-full text-xs w-max pl-1 pr-1 hover:bg-slate-800 rounded'>+</button>
        </div>
      </div>
      <Link href={'/'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
        Exit
      </Link>
    </nav>
  )
}
