import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center p-4'>
      <Link href={'/'} className='cursor:pointer w-48'>
        <Image src='/logo.png' priority={true} width={0} height={0} sizes='100vw' className='w-full' alt='logo' />
      </Link>
      <nav className='flex space-x-4'>
        <Link href={'/basket'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
          Cart
        </Link>
        <Link href={'/'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
          Account
        </Link>
        <Link href={'/'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
          Exit
        </Link>
      </nav>
    </header>
  )
}
