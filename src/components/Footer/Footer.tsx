import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='flex justify-between m-4'>
      <p className="text-sm font-medium text-gray-300">&copy; 2024</p>
      <ul className='flex flex-col'>
        <li><Link href={'/'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>О компании</Link></li>
        <li><Link href={'/'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>Каталог</Link></li>
        <li><Link href={'/'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>Контакты</Link></li>
        <li><Link href={'/'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>Вакансии</Link></li>
        <li><Link href={'#'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>Политика конфиденциальности</Link></li>
      </ul>
    </footer>
  );
};
