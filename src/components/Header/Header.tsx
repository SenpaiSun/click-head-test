import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center p-4 w-full h-200'>
      <Link href={'/'} className='cursor:pointer'>
        <Image src='/logo.png' width={200} height={31} alt='logo' />
      </Link>
      <div className='flex space-x-4'>
        <Link href={'/basket'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
          Корзина
        </Link>
        <Link href={'/'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
          Мой аккаунт
        </Link>
        <Link href={'/'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
          Выйти
        </Link>
      </div>
    </header>
  )
}
