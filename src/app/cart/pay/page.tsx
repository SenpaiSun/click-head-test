import { Delivery } from '@/src/components/Delivery/Delivery'
import { Payment } from '@/src/components/Payment/Payment'
import { Metadata } from 'next'
import React from 'react'

const metadata: Metadata = {
  title: 'Deluvery address',
  description: 'Deluvery address page',
}

export default function Pay() {
  return (
    <div className='flex flex-row justify-between w-full min-h-52'>
      <Payment />
    </div>
  )
}