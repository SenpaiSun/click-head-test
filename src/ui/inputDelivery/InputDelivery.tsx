'use client'
import { useActions } from '@/src/hooks/action'
import React, { useEffect, useState } from 'react';

export const InputDelivery = ({name}: {name: string}) => {
  const {setFirstName, setLastName, setPhone, setAddress, setAdded} = useActions()
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem('user') || '{}')
    setFirstName(dataUser.firstName)
    setLastName(dataUser.lastName)
    setPhone(dataUser.phone)
    setAddress(dataUser.address)
    setAdded(dataUser.added)

    switch (name) {
      case 'First name':
        setInputValue(dataUser.firstName || '');
        break;
      case 'Last name':
        setInputValue(dataUser.lastName || '');
        break;
      case 'Phone':
        setInputValue(dataUser.phone || '');
        break;
      case 'Address':
        setInputValue(dataUser.address || '');
        break;
    }
  }, [])

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const phoneValue = value.replace(/\D/g, '');
    setInputValue(value);

    switch (name) {
      case 'First name':
        setFirstName(value)
        break
      case 'Last name':
        setLastName(value)
        break
      case 'Phone':
        setPhone(phoneValue)
        break
      case 'Address':
        setAddress(value)
        break
    }
  }

  return (
    <div className='flex flex-col md:flex-row justify-between gap-1'>
      <label htmlFor={name} className='w-max min-w-24 md:m-auto h-max text-sm font-medium text-gray-900'>{name}:</label>
      <input name={name} id={name} value={inputValue} onChange={onChangeValue} inputMode={name === 'Phone' ? 'numeric' : 'text'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 pl-2 pr-2 focus:outline-none" required placeholder={name}></input>
    </div>
  )
}