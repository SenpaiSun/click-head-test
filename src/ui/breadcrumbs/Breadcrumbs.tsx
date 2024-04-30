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
    <div className='flex flex-col md:flex-row border-b'>
      <button onClick={() => router.back()} className='text-sm md:text-base mr-4 border rounded w-max px-2 mb-1 bg-slate-200 hover:bg-slate-400 hover:text-white'>
        Back
      </button>
      <div className='flex flex-row'>
        <p className={location === '/cart/products' ? 'text-sm md:text-base font-semibold underline text-green-500' : 'text-sm md:text-base font-semibold'}>CART</p>
        <p className='text-sm md:text-base'>&nbsp;❯&nbsp;</p>
        <p className={location === '/cart/delivery' ? 'text-sm md:text-base font-semibold underline text-green-500' : 'text-sm md:text-base font-semibold'}>DELIVERY</p>
        <p className='text-sm md:text-base'>&nbsp;❯&nbsp;</p>
        <p className={location === '/cart/pay' ? 'text-sm md:text-base font-semibold underline text-green-500' : 'text-sm md:text-base font-semibold'}>PAY</p>
        <p className='text-sm md:text-base'>&nbsp;❯&nbsp;</p>
        <p className={location === '/cart/order-info' ? 'text-sm md:text-base font-semibold underline text-green-500' : 'text-sm md:text-base font-semibold'}>ORDER</p>
      </div>
    </div>
  )
}

export default Breadcrumbs
