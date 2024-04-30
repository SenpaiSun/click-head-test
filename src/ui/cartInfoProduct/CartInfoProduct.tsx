'use client'
import { useActions } from '@/src/hooks/action'
import React, { useEffect } from 'react'
import { ButtonToCartProps } from '../buttonToCart/ButtonToCart'

interface CartInfoProductProps {
  id: number
  title: string
  price: number
}

export const CartInfoProduct = (props: CartInfoProductProps) => {
  const { id, title, price } = props
  const cart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '[]') : []
  const { setProductsCart, setCountToCart } = useActions()

  useEffect(() => {
    setCountToCart(cart.length)
  }, [cart.length, setCountToCart])

  const handlerDeleteProduct = () => {
    if (typeof window !== 'undefined') {
      const idnexProduct = cart.findIndex((product: ButtonToCartProps) => product.id === id)
      cart.splice(idnexProduct, 1)
      localStorage.setItem('cart', JSON.stringify(cart))
      setProductsCart(cart)
    }
  }
  return (
    <div className='flex flex-row justify-between content-center gap-2 md:gap-4 border-b p-1'>
      <button onClick={handlerDeleteProduct} type='button' className='border rounded border-red-800 w-12 h-5 hover:bg-red-600 text-white m-auto min-w-6'>
        <p className='m-auto text-center text-xs text-red-600 hover:text-white'>-</p>
      </button>
      <div className='w-full h-max'>
        <p className='text-start text-xs md:text-sm line-clamp-2'>{title}</p>
      </div>
      <p className='text-end w-max min-w-24 md:min-w-32 text-xs md:text-sm'>{`${price} $`}</p>
    </div>
  )
}
