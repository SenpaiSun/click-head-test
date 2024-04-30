'use client'
import { Delivery } from '@/src/components/Delivery/Delivery'
import { useAppSelector } from '@/src/hooks/redux'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DeliveryInfo() {
  const cartInfo = useAppSelector((state) => state.products.countToCart)
  const router = useRouter()

  if(cartInfo === 0) {
    router.push('/cart/products')
  }

  return (
    <div className='flex flex-row justify-between w-full min-h-52'>
      <Delivery />
    </div>
  )
}
