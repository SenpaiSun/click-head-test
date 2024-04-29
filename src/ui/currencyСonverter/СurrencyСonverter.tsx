'use client'
import { useActions } from '@/src/hooks/action'
import { useAppSelector } from '@/src/hooks/redux'
import React from 'react'

export const СurrencyСonverter: React.FC = () => {
  const balance = useAppSelector((state) => state.balance)
  const { setUsd, setCoins } = useActions()
  const [balanceUsd, setBalanceUsd] = React.useState<number | null>(null)

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value)
    setBalanceUsd(newValue)
  }

  const handleCoinsConvert = () => {
    if (balanceUsd && balanceUsd > 0) {
      const localCoins = localStorage.getItem('balance') ? JSON.parse(localStorage.getItem('balance') || '[]') : { usd: 0, coins: 0 }
      const updateCoins: number = localCoins.coins + balanceUsd
      const updateUsd: number = localCoins.usd - balanceUsd
      localCoins.usd = updateUsd
      localCoins.coins = updateCoins
      localStorage.setItem('balance', JSON.stringify(localCoins))
      console.log(updateCoins, typeof updateCoins, updateUsd, typeof updateUsd)
      setUsd(Number(updateUsd))
      setCoins(Number(updateCoins))
    }
  }

  return (
    <div>
      <p className='block text-sm font-medium text-gray-900 mb-2'>Replenish coins:</p>
      <div className='ml-2'>
        <div className='h-12'>
          <p className={`block text-sm font-medium ${(balanceUsd !== null && balanceUsd > balance.usd) ? 'text-red-600' : 'text-gray-900'}`}>USD balance: {balance.usd.toFixed(2)} $</p>
          <p className={`${(balanceUsd !== null && balanceUsd > balance.usd) ? 'block' : 'hidden'} text-sm font-medium text-red-500 `}>There is not enough USD on the balance sheet.</p>
        </div>
        <div className='flex flex-row content-center h-max'>
          <div className='relative mb-6'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-currency-dollar' viewBox='0 0 16 16'>
                <path d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z' />
              </svg>
            </div>
            <input
              onChange={handleUsdChange}
              value={balanceUsd === null ? '' : balanceUsd}
              min='0'
              max={balance.usd}
              type='number'
              id='input-usd'
              className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 ps-10 p-2.5'
              placeholder='USD'
            />
          </div>
          <div className='w-max h-max text-3xl'>➥</div>
          <div className='relative mb-6'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-currency-cent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                {' '}
                <path stroke='none' d='M0 0h24v24H0z' fill='none' /> <path d='M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a5.996 5.996 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4.004 -1.536' /> <path d='M12 20v-2' /> <path d='M12 6v-2' />{' '}
              </svg>
            </div>
            <input disabled value={balanceUsd === null ? '' : balanceUsd} type='number' id='coin-input' className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 ps-10 p-2.5' placeholder='Coins' />
          </div>
          <button
            onClick={handleCoinsConvert}
            disabled={(balanceUsd !== null && balanceUsd < balance.usd) ? false : true}
            type='button'
            className='w-14 h-10 ml-2 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'
          >
            ✓
          </button>
        </div>
        <div>
          <p className={`block text-sm font-medium ${balance.coins + (balanceUsd ? balanceUsd : 0) !== balance.coins ? 'text-green-600' : 'text-gray-900'} `}>Coins balance: {(balance.coins + (balanceUsd ? balanceUsd : 0)).toFixed(2)} $</p>
        </div>
      </div>
    </div>
  )
}
