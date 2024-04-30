import React from 'react'
import Image from 'next/image'
import card from '../../../public/card.jpg'
import { ButtonToCart } from '@/src/ui/buttonToCart/ButtonToCart'

interface CardProductProps {
  id: number
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
  const { title, price, description, image, rating, id } = props as CardProductProps
  return (
    <div className='flex md:flex-row flex-col justify-between space-x-4 border border-slate-600 bg-white rounded-2xl gap-4 mb-6 p-4 w-full max-w-7xl text-black bg-gray-100 items-end'>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex items-center size-32 min-w-32 flex justify-center items-center relative overflow-hidden w-full md:w-32'>
          <Image width={55} height={140} src={image ? image : card} alt='' className='w-auto'></Image>
        </div>
        <div className='flex flex-col gap-4 max-w-3xl w-full'>
          <div className='flex flex-col'>
            <p className='font-bold text-xs md:text-sm text-black'>{title}</p>
            <div className='flex flex-row gap-2 mt-2 md:mt-0'>
              <div className='w-4 h-4'>
                <Image src={'/star.svg'} width={0} height={0} alt='Rating icon' className='w-auto md:mt-1' />
              </div>
              <div className='flex flex-row gap-2'>
                <p className={`${rating.rate < 3 ? 'text-amber-600 text-xs md:text-sm' : 'text-amber-400 text-xs md:text-sm'}`}>{rating.rate}</p>
                <p className='text-slate-400 text-xs md:text-sm'>Sold:</p>
                <p className='text-slate-400 text-xs md:text-sm'>{rating.count}</p>
              </div>
            </div>
          </div>
          <p className='text-xs md:text-sm max-h-20 line-clamp-3 text-sm font-medium text-black'>{description}</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-32 justify-between'>
        <p className='text-end font-bold text-black'>Price: {price} $</p>
        <ButtonToCart id={id} title={title} price={price} />
      </div>
    </div>
  )
}
