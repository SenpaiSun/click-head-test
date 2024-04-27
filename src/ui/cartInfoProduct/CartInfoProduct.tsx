import React from 'react'

interface CartInfoProductProps {
  id: number
  title: string
  price: number
}

export const CartInfoProduct = (props: CartInfoProductProps) => {
  const { id, title, price } = props
  return (
    <div className='flex flex-row justify-between content-center gap-4 border-b p-1'>
      <button type='button' className='border rounded border-red-800 w-12 h-5 hover:bg-red-600 text-white m-auto'>
        <p className='m-auto text-center text-xs text-red-600 hover:text-white'>-</p>
      </button>
      <div className='w-full h-max'>
        <p className='text-start text-sm'>{title}</p>
      </div>
      <p className='text-end w-max min-w-32 text-sm'>{`${price} $`}</p>
    </div>
  )
}
