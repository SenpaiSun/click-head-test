'use client'
import { CartInfoProduct } from '@/src/ui/cartInfoProduct/CartInfoProduct'
import React from 'react'

interface CardProductProps {
  id: number
  title: string
  price: number
}

export const CartItem: React.FC = () => {
  const dataProducts = JSON.parse(localStorage.getItem('cart') || '[]')
  console.log(dataProducts)
  return (
    <div className='flex flex-col border border-slate-600 rounded-2xl p-4 w-3/5'>
      {dataProducts.map((product: CardProductProps, index: number) => (
        <CartInfoProduct key={index} id={product.id} title={product.title} price={product.price} />
      ))}
    </div>
  )
}
