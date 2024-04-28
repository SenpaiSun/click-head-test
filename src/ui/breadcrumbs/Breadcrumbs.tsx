'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Breadcrumbs: React.FC = () => {
  const currentPath = usePathname()
  const [location, setLocation] = React.useState<string>(currentPath)


  useEffect(() => {
    setLocation(currentPath)
  }, [currentPath])

  return (
    <div className='flex flex-row border-b'>
      <Link href={'/cart/products'} className={location === '/cart/products' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        CART
      </Link>
      <p>&nbsp;❯&nbsp;</p>
      <Link href={'/cart/payment'} className={location === '/cart/payment' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        PAYMENT METHOD
      </Link>
      <p>&nbsp;❯&nbsp;</p>
      <Link href={'/cart/payment/pay'} className={location === '/cart/payment/pay' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        PAY
      </Link>
      <p>&nbsp;❯&nbsp;</p>
      <Link href={'/cart/payment/order-info'} className={location === '/cart/payment/order-info' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        ORDER INFORMATION
      </Link>
    </div>
  )
}

export default Breadcrumbs
