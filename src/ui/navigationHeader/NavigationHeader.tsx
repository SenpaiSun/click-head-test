'use client';
import { useAppSelector } from '@/src/hooks/redux';
import Link from 'next/link';
import React from 'react';

export const NavigationHeader: React.FC = () => {
  const countToCartProducts = JSON.parse(localStorage.getItem('cart') || '[]').length
  return (
    <nav className='flex space-x-4 w-max'>
        <Link href={'/basket'} className='flex flex-row gap-1 space-x-0 text-center hover:opacity-70 color-hover-text'>
          <h1>Cart</h1>
          <div className='flex justify-center items-center w-5 h-5 bg-red-500 rounded-full text-xs'>
            <p className='m-auto'>{countToCartProducts}</p>
          </div>
        </Link>
        <Link href={'/'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
          Account
        </Link>
        <Link href={'/'} className='space-x-0 text-center hover:opacity-70 color-hover-text'>
          Exit
        </Link>
      </nav>
  );
};
