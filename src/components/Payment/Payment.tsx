import { СurrencyСonverter } from '@/src/ui/currencyСonverter/СurrencyСonverter'
import { PaymentResult } from '@/src/ui/paymentResult/PaymentResult'
import { SelectMethodButton } from '@/src/ui/selectMethodButton/SelectMethodButton'
import React from 'react'

export const Payment: React.FC = () => {
  return (
    <form className='flex h-auto flex-col w-full md:w-max'>
      <h1 className='text-start text-3xl font-bold m-4 underline underline-offset-3 decoration-8 decoration-green-400 text-gray-700'>Payment:</h1>
      <div className='flex h-auto justify-between flex-col xl:flex-row items-center xl:items-start border border-slate-600 rounded-2xl p-4 w-full min-h-52 gap-4'>
        <SelectMethodButton />
        <PaymentResult />
        <СurrencyСonverter />
      </div>
    </form>
  )
}
