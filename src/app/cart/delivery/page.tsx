import { CartItem } from '@/src/components/CartItem/CartItem'
import { Delivery } from '@/src/components/Delivery/Delivery'
import { TotalCartInfo } from '@/src/components/TotalCartInfo/TotalCartInfo'
import Breadcrumbs from '@/src/ui/breadcrumbs/Breadcrumbs'
import { Metadata } from 'next'
import React from 'react'

const metadata: Metadata = {
  title: 'Deluvery address',
  description: 'Deluvery address page',
}

export default function Payment() {
  return (
    <div className='flex flex-row justify-between w-full min-h-52'>
      <Delivery />
    </div>
  )
}
