'use client'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Breadcrumbs: React.FC = () => {
  const currentPath = usePathname()
  const router = useRouter()
  const [location, setLocation] = React.useState<string>(currentPath)

  useEffect(() => {
    setLocation(currentPath)
  }, [currentPath])

  return (
    <div className='flex flex-row border-b'>
      <button onClick={() => router.back()} className='mr-4 border rounded w-max px-2 mb-1 bg-slate-200 hover:bg-slate-400 hover:text-white'>Back</button>
      <p className={location === '/cart/products' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        CART
      </p>
      <p>&nbsp;❯&nbsp;</p>
      <p className={location === '/cart/delivery' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        DELIVERY ADDRESS
      </p>
      <p>&nbsp;❯&nbsp;</p>
      <p className={location === '/cart/pay' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        PAY
      </p>
      <p>&nbsp;❯&nbsp;</p>
      <p className={location === '/cart/order-info' ? 'font-semibold underline text-green-500' : 'font-semibold'}>
        ORDER INFORMATION
      </p>
    </div>
  )
}

export default Breadcrumbs
