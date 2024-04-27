import React from 'react'
import Image from 'next/image'
import card from '../../../public/card.jpg'
import { ButtonToBacket } from '@/src/ui/buttonToBacket/ButtonToBacket'

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
    <div className='flex justify-between space-x-4 border border-slate-600 bg-gray-900 rounded-2xl gap-4 mb-6 p-4 w-full max-w-7xl flex-row'>
      <div className='size-32 min-w-32 flex justify-center items-center relative overflow-hidden'>
        <Image width={0} height={0} src={card} alt='' className='w-full'></Image>
      </div>
      <div className='flex flex-col gap-4 max-w-3xl w-full'>
        <div className='flex flex-col'>
          <p className='font-bold'>{title}</p>
          <div className='flex flex-row gap-2'>
            <Image src={'/star.svg'} width={20} height={20} alt='Rating icon'/>
            <p className={`${rating.rate < 3 ? 'text-amber-600' : 'text-amber-400'}`}>{rating.rate}</p>
            <p className='text-slate-400'>Sold:</p>
            <p className='text-slate-400'>{rating.count}</p>
          </div>
        </div>
        <p className='text-sm max-h-20 line-clamp-3'>{description}</p>
      </div>
      <div className='flex flex-col gap-4 w-32 justify-between'>
        <p className='text-end'>Price: {price} $</p>
        <ButtonToBacket />
      </div>
    </div>
  )
}
