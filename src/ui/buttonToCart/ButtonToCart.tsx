'use client'
import { useActions } from '@/src/hooks/action'
import React, { useEffect } from 'react'

interface ButtonToCartProps {
  id: number
  title: string
  price: number
}

export const ButtonToCart = (props: ButtonToCartProps) => {
  const { id, title, price } = props
  const {setCountToCart} = useActions()
  const localData = JSON.parse(localStorage.getItem('cart') || '[]')
  const [productToCart, setProductToCart] = React.useState<boolean>(false)

  useEffect(() => {
    const isProductInCart = localData.some((product: ButtonToCartProps) => product.id === id)
    setProductToCart(isProductInCart)
    setCountToCart(localData.length)
  }, [id, localData, setCountToCart])

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push({ id: id, title: title, price: price })
    localStorage.setItem('cart', JSON.stringify(cart))
    setProductToCart(true)
  }

  const deleteToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const idnexProduct = cart.findIndex((product: ButtonToCartProps) => product.id === id)
    cart.splice(idnexProduct, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    setProductToCart(false)
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
