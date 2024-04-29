'use client'
import { useActions } from '@/src/hooks/action'
import { useAppSelector } from '@/src/hooks/redux'
import Link from 'next/link'
import React, { useActionState, useEffect } from 'react'

export const NavigationHeader: React.FC = () => {
  const { setCountToCart, setUsd, setCoins } = useActions()

  useEffect(() => {
    if(!localStorage.getItem('balance')){
      localStorage.setItem('balance', '{"usd": 1000, "coins": 1000}')
    }
    const usd = localStorage.getItem('balance') ? JSON.parse(localStorage.getItem('balance') || '[]').usd : 0
    const coins = localStorage.getItem('balance') ? JSON.parse(localStorage.getItem('balance') || '[]').coins : 0
    setUsd(usd)
    setCoins(coins)
    const countProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '[]').length : 0
    setCountToCart(countProducts)
  }, [setCoins, setCountToCart, setUsd])

  const countToCartProducts = useAppSelector((state) => state.products.countToCart)

  const balance = useAppSelector((state) => state.balance)

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
          <p className='h-full text-xs w-max border-r border-slate-600 pl-1 pr-1'>{balance.usd.toFixed(2)} $</p>
          <p className='h-full text-xs w-max border-r border-slate-600 pl-1 pr-1 mr-1'>{balance.coins.toFixed(2)} Coins</p>
          <button className='h-full text-xs w-max pl-1 pr-1 hover:bg-slate-800 rounded'>+</button>
        </div>
      </div>
      <Link href={'/'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
        Exit
      </Link>
    </nav>
  )
}
