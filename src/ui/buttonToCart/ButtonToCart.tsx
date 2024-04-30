'use client'
import { useActions } from '@/src/hooks/action'
import React, { useEffect } from 'react'

export interface ButtonToCartProps {
  id: number
  title: string
  price: number
}

export const ButtonToCart = (props: ButtonToCartProps) => {
  const { id, title, price } = props
  const { setCountToCart } = useActions()
  const [productToCart, setProductToCart] = React.useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localData = JSON.parse(localStorage.getItem('cart') || '[]')
      const isProductInCart = localData.some((product: ButtonToCartProps) => product.id === id)
      setProductToCart(isProductInCart)
      setCountToCart(localData.length)
    }
  }, [id, setCountToCart])

  const addToCart = () => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      cart.push({ id: id, title: title, price: price })
      localStorage.setItem('cart', JSON.stringify(cart))
      setProductToCart(true)
    }
  }

  const deleteToCart = () => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const indexProduct = cart.findIndex((product: ButtonToCartProps) => product.id === id)
      cart.splice(indexProduct, 1)
      localStorage.setItem('cart', JSON.stringify(cart))
      setProductToCart(false)
    }
  }

  const onClickHandler = () => {
    if (!productToCart) {
      addToCart()
    } else {
      deleteToCart()
    }
  }
  return (
    <div className='w-full h-10 min-w-32'>
      <button onClick={onClickHandler} className='border rounded-2xl border-green-800 w-full h-10 bg-green-600 hover:bg-green-700 text-white'>
        {productToCart ? '✓' : '+'}
      </button>
    </div>
  )
}
