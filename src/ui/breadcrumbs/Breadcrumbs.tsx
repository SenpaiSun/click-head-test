'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Breadcrumbs: React.FC = () => {
  const [location, setLocation] = React.useState<string>(window.location.pathname)
  useEffect(() => {
    setLocation(window.location.pathname)
  }, [])
  console.log(location)
  return (
    <div className='flex flex-row border-b'>
      <Link href={'/basket'} className={location === '/basket' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
       CART
      </Link>
      <p>&nbsp;❯&nbsp;</p>
      <Link href={'/basket/payment'} className={location === '/basket/payment' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        PAYMENT METHOD
      </Link>
      <p>&nbsp;❯&nbsp;</p>
      <Link href={'/basket/payment/pay'} className={location === '/basket/payment/pay' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        PAY
      </Link>
      <p>&nbsp;❯&nbsp;</p>
      <Link href={'/basket/payment/order-info'} className={location === '/basket/payment/order-info' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        ORDER INFORMATION
      </Link>
    </div>
  )
}

export default Breadcrumbs
