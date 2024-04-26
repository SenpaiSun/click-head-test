import React from 'react'
import Image from 'next/image'

interface CardProductProps {
  title: string
  price: number
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const CardProduct: React.FC = (props) => {
  const { title, price, description, image, rating } = props as CardProductProps
  return (
    <div className='flex space-x-4 border-2 rounded-2xl gap-4 mb-12 p-4 object-contain w-full'>
      <div className='w-52 h-40 flex justify-center items-center relative'>
        <Image layout='fill' objectFit='contain' src={image} alt=''></Image>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row gap-4'>
          <p className='font-bold'>{title}</p>
          <div className='[bg-url("/star.svg")] w-4 h-4'>
            <p className='top-3 right-3 text-sm'>{rating.rate}</p>
          </div>
          <p>{rating.rate}</p>
          <p>{rating.count}</p>
        </div>
        <p>{description}</p>
      </div>
      <div>
        <p>{price}</p>
        <button>Купить</button>
      </div>
    </div>
  )
}
