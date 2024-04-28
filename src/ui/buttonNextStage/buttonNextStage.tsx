import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export const ButtonNextStage = () => {
  const router = useRouter();
  const location = usePathname()

  const onClickHandler = () => {
    console.log(location)
    switch (location) {
      case '/cart/products':
        router.push('/cart/payment');
        break;
      case '/cart/payment':
        router.push('/cart/payment/pay');
        break;
      case '/cart/payment/pay':
        router.push('/cart/payment/order-info');
        break;
      case '/cart/payment/order-info':
        router.push('/');
        break;
    }
  }

  const textButton = () => {
    switch (location) {
      case '/cart/products':
        return 'NEXT ➤';
      case '/cart/payment':
        return 'NEXT ➤';
      case '/cart/payment/pay':
        return 'PAY';
      case '/cart/payment/order-info':
        return 'To main page';
    }
  }

  return <button onClick={onClickHandler} className='border rounded border-green-700 w-52 h-16 bg-green-500 hover:bg-green-600 text-white text-2xl'>{textButton()}</button>
}
