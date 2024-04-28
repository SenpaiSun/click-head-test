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

  return <button onClick={onClickHandler} className='border rounded border-green-700 w-52 h-16 bg-green-500 hover:bg-green-600 text-white text-2xl'>{textButton()}</button>
}
