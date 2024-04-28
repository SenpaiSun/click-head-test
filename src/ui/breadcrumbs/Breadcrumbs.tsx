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
      <Link href={'/cart/delivery'} className={location === '/cart/delivery' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        DELIVERY ADDRESS
      </Link>
      <p>&nbsp;❯&nbsp;</p>
      <Link href={'/cart/delivery/pay'} className={location === '/cart/delivery/pay' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        PAY
      </Link>
      <p>&nbsp;❯&nbsp;</p>
      <Link href={'/cart/delivery/order-info'} className={location === '/cart/delivery/order-info' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        ORDER INFORMATION
      </Link>
    </div>
  )
}

export default Breadcrumbs
