import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useAppSelector } from '@/src/hooks/redux'
import { Product } from '@/src/store/types'
import { useActions } from '@/src/hooks/action'

export const ButtonNextStage = () => {
  const router = useRouter()
  const location = usePathname()
  const {setUsd, setCoins, setClearCart, setClearUser} = useActions()
  const balanceInfo = useAppSelector((state) => state.balance)
  const productsInfo = useAppSelector((state) => state.products)
  const userInfo = useAppSelector((state) => state.user)
  const localData = JSON.parse(localStorage.getItem('user') || '[]')
  const checkSubmit = useAppSelector((state) => state.user.added)
  const [access, setAccess] = React.useState(false)

  const onClickHandler = () => {
    console.log(location)
    switch (location) {
      case '/cart/products':
        router.push('/cart/delivery')
        break
      case '/cart/delivery':
        router.push('/cart/pay')
        break
      case '/cart/pay':
        router.push('/cart/order-info')
        break
      case '/cart/order-info':
        router.push('/')
        break
    }
  }

  const checkAccess = () => {
    switch (location) {
      case '/cart/products':
        if (productsInfo.productsCart.length > 0) {
          setAccess(false)
          break
        } else {
          setAccess(true)
          break
        }
      case '/cart/delivery':
        if (localStorage.getItem('user') && localStorage.getItem('user') !== '{}') {
          setAccess(false)
          break
        } else {
          setAccess(true)
          break
        }
      case '/cart/pay':
        if (balanceInfo.method === 'USD') {
          if (balanceInfo.usd >= productsInfo.totalPriceCart) {
            setAccess(false)
            break
          } else {
            setAccess(true)
            break
          }
        } else if (balanceInfo.method === 'Coins') {
          if (balanceInfo.coins >= productsInfo.totalPriceCart) {
            setAccess(false)
            break
          } else {
            setAccess(true)
            break
          }
        } else {
          setAccess(true)
          break
        }
      case '/cart/order-info':
        setAccess(false)
        break
    }
  }

  useEffect(() => {
    checkAccess()
  }, [balanceInfo, productsInfo, userInfo, location, localData, checkSubmit])

  const onPay = async () => {
    const payOperation = () => {
      const balanceLocal = localStorage.getItem('balance') ? JSON.parse(localStorage.getItem('balance') || '[]') : 0
      if (balanceInfo.method === 'USD') {
        console.log('text 1')
        if (balanceInfo.usd >= productsInfo.totalPriceCart) {
          console.log('text 1')
          localStorage.setItem('balance', JSON.stringify({ usd: Number((balanceLocal.usd - productsInfo.totalPriceCart).toFixed(2)), coins: balanceLocal.coins }))
          setUsd(balanceInfo.usd - productsInfo.totalPriceCart)
        }
      } else if (balanceInfo.method === 'Coins') {
        console.log('text 1')
        if (balanceInfo.coins >= productsInfo.totalPriceCart) {
          console.log('text 2')
          localStorage.setItem('balance', JSON.stringify({ usd: balanceLocal.usd, coins: Number((balanceLocal.coins - productsInfo.totalPriceCart).toFixed(2)) }))
          setCoins(balanceInfo.coins - productsInfo.totalPriceCart)
        }
      }
    }
    await payOperation()
    const createOrder = () => {
      const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '[]') : []
      const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '[]') : []
      const localBalance = localStorage.getItem('balance') ? JSON.parse(localStorage.getItem('balance') || '[]') : 0
      const localOrders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders') || '[]') : []
      const order = {
        number: localOrders.length + 1,
        user: localUser,
        products: localCart,
        balance: localBalance,
      }
      localStorage.setItem('orders', JSON.stringify([...localOrders, order]))
      localStorage.removeItem('cart')
      localStorage.removeItem('user')
      setClearCart()
      setClearUser()
    }
    await createOrder()
    router.push('/cart/order-info')
  }

  const textButton = () => {
    switch (location) {
      case '/cart/products':
        return 'NEXT ➤'
      case '/cart/delivery':
        return 'NEXT ➤'
      case '/cart/pay':
        return 'PAY'
      case '/cart/order-info':
        return 'To main page'
    }
  }

  return (
    <button disabled={access} onClick={location === '/cart/pay' ? onPay : onClickHandler} className='border rounded border-green-700 w-52 h-16 bg-green-500 hover:bg-green-600 text-white text-2xl disabled:opacity-50 disabled:hover:bg-gray-500 disabled:bg-gray-500'>
      {textButton()}
    </button>
  )
}
