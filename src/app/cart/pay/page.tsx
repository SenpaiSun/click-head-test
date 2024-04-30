'use client'
import { Payment } from '@/src/components/Payment/Payment'
import { useAppSelector } from '@/src/hooks/redux'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function Pay() {
  const userInfo = useAppSelector((state) => state.user)
  const router = useRouter()
  console.log(userInfo)
  if(userInfo.added === false) {
    router.push('/cart/products')
  }
  return (
    <div className='flex flex-row justify-between w-full min-h-52'>
      <Payment />
    </div>
  )
}
