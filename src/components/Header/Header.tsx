import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NavigationHeader } from '../../ui/navigationHeader/NavigationHeader'

export const Header: React.FC = () => {

  return (
    <header className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center p-4 sticky top-0 z-50 bg-black'>
      <Link href={'/'} className='cursor:pointer w-48'>
        <Image src='/logo.png' priority={true} width={0} height={0} sizes='100vw' className='w-full' alt='logo' />
      </Link>
      <NavigationHeader />
    </header>
  )
}
