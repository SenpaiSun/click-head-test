import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useAppSelector } from '@/src/hooks/redux';

export const ButtonNextStage = () => {
  const router = useRouter();
  const location = usePathname()
  const stateInfo = useAppSelector(state => state)

  const onClickHandler = () => {
    console.log(location)
    switch (location) {
      case '/cart/products':
        router.push('/cart/delivery');
        break;
      case '/cart/delivery':
        router.push('/cart/pay');
        break;
      case '/cart/delivery/pay':
        router.push('/cart/order-info');
        break;
      case '/cart/delivery/order-info':
        router.push('/');
        break;
    }
  }

  const onPay = () => {
    const balanceLocal = localStorage.getItem('balance') ? JSON.parse(localStorage.getItem('balance') || '[]') : 0
    if(stateInfo.balance.method === 'USD'){
      if(stateInfo.balance.usd >= stateInfo.products.totalPriceCart){
        localStorage.setItem('balance', JSON.stringify({usd: (balanceLocal.usd - stateInfo.products.totalPriceCart).toFixed(2), coins: balanceLocal.coins}))
      }
    } else if(stateInfo.balance.method === 'Coins'){
      if(stateInfo.balance.usd >= stateInfo.products.totalPriceCart){
        localStorage.setItem('balance', JSON.stringify({usd: balanceLocal.usd, coins: (balanceLocal.coins - stateInfo.products.totalPriceCart).toFixed(2)}))
      }
    }
    router.push('/cart/order-info')
  }

  const textButton = () => {
    switch (location) {
      case '/cart/products':
        return 'NEXT ➤';
      case '/cart/delivery':
        return 'NEXT ➤';
      case '/cart/pay':
        return 'PAY';
      case '/cart/order-info':
        return 'To main page';
    }
  }

  return <button onClick={location === '/cart/pay' ? onPay : onClickHandler} className='border rounded border-green-700 w-52 h-16 bg-green-500 hover:bg-green-600 text-white text-2xl'>{textButton()}</button>
}
