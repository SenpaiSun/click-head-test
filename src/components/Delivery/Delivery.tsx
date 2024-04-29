'use client'
import { delivery } from '@/src/constants/constants'
import { useActions } from '@/src/hooks/action'
import { useAppSelector } from '@/src/hooks/redux'
import { InputDelivery } from '@/src/ui/inputDelivery/InputDelivery'
import React from 'react'

export const Delivery: React.FC = () => {
  const confitmData = useAppSelector((state) => state.user)
  const {setAdded} = useActions()
  const onSubmit = (e: any) => {
    e.preventDefault()
    localStorage.removeItem('user')
    localStorage.setItem('user', JSON.stringify(confitmData))
    setAdded(true)
  }
  return (
    <form onSubmit={onSubmit} className='flex h-auto flex-col w-5/6'>
      <h1 className='text-start text-3xl font-bold m-4 underline underline-offset-3 decoration-8 decoration-green-400 text-gray-700'>Delivery information:</h1>
      <div className='flex h-auto flex-col border border-slate-600 rounded-2xl p-4 w-full min-h-52 gap-4'>
        {delivery.map((item: string, index: number) => (
          <InputDelivery key={index} name={item} />
        ))}
        <button type='submit' className='border border-green-600 rounded w-24 bg-green-500 text-white hover:bg-green-600 m-auto'>Confirm</button>
      </div>
    </form>
  )
}
