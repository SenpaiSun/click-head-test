'use client'
import { useActions } from '@/src/hooks/action'
import React from 'react'

export const SelectMethodButton: React.FC = () => {
  const { setMethod } = useActions()

  const handleMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMethod = e.target.value as 'USD' | 'Coins'
    setMethod(selectedMethod)
  }

  return (
    <div>
      <label htmlFor='method' className='block mb-2 text-sm font-medium text-gray-900'>
        Select method:
      </label>
      <select onChange={handleMethodChange} defaultValue={'Select value'} name='method' id='method' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 focus:outline-none'>
        <option value='USD'>USD</option>
        <option value='Coins'>Coins</option>
      </select>
    </div>
  )
}
