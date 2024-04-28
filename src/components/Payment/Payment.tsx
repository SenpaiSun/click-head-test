import { СurrencyСonverter } from '@/src/ui/currencyСonverter/СurrencyСonverter'
import { PaymentResult } from '@/src/ui/paymentResult/PaymentResult'
import { SelectMethodButton } from '@/src/ui/selectMethodButton/SelectMethodButton'
import React from 'react'

export const Payment: React.FC = () => {
  return (
    <form className='flex h-auto flex-col w-5/6'>
      <h1 className='text-start text-3xl font-bold m-4'>Payment:</h1>
      <div className='flex h-auto justify-between flex-row border border-slate-600 rounded-2xl p-4 w-full min-h-52 gap-4'>
        <SelectMethodButton />
        <PaymentResult />
        <СurrencyСonverter />
      </div>
    </form>
  )
}
