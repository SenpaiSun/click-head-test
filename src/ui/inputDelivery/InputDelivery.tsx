'use client'
import { useActions } from '@/src/hooks/action'
import { useAppSelector } from '@/src/hooks/redux'
import React, { useEffect } from 'react'


export const InputDelivery = ({name}: {name: string}) => {
  const {setFirstName, setLastName, setPhone, setAddress} = useActions()
  const dataUser = useAppSelector((state) => state.user)

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem('user') || '{}')
    setFirstName(dataUser.firstName)
    setLastName(dataUser.lastName)
    setPhone(dataUser.phone)
    setAddress(dataUser.address)
  }, [])

  const value = () => {
    switch (name) {
      case 'First name':
        return dataUser.firstName
      case 'Last name':
        return dataUser.lastName
      case 'Phone':
        return dataUser.phone
      case 'Address':
        return dataUser.address
    }
  }
  const onChangeValue = (e: any) => {
    const value = e.target.value;
    const phoneValue = value.replace(/\D/g, '');
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
  console.log(dataUser)

  return (
    <div className='flex flex-row justify-between gap-1'>
      <label className='w-max min-w-24'>{name}:</label>
      <input value={value()} onChange={onChangeValue} inputMode={name === 'Phone' ? 'numeric' : 'text'} className='border border-slate-400 rounded w-full pl-1 pr-1 focus:outline-none' required></input>
    </div>
  )
}
