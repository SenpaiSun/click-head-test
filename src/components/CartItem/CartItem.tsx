'use client'
import { useActions } from '@/src/hooks/action'
import { useAppSelector } from '@/src/hooks/redux'
import { CartInfoProduct } from '@/src/ui/cartInfoProduct/CartInfoProduct'
import React, { useEffect } from 'react'

export interface CardProductProps {
  id: number
  title: string
  price: number
}

export const CartItem: React.FC = () => {
  const { setProductsCart } = useActions()
  const dataCart = useAppSelector((state) => state.products)

  useEffect(() => {
    setProductsCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])

  return (
    <div className='flex h-auto flex-col w-5/6'>
      <h1 className='text-start text-3xl font-bold m-4'>Products:</h1>
      <div className='flex h-auto flex-col border border-slate-600 rounded-2xl p-4 w-full min-h-52'>
        {dataCart.productsCart.length ? dataCart.productsCart.map((product: CardProductProps, index: number) => <CartInfoProduct key={index} id={product.id} title={product.title} price={product.price} />) : <div className='text-center text-black m-auto text-3xl font-bold'>Cart is empty</div>}
      </div>
    </div>
  )
}
