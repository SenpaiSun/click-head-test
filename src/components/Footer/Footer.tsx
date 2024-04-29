import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='flex justify-between m-8'>
      <p className="text-sm font-medium text-gray-300">&copy; 2024</p>
      <ul className='flex flex-col'>
        <li><Link href={'https://clickhead.me/about'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>About Us</Link></li>
        <li><Link href={'https://clickhead.me/contacts'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>Contacts</Link></li>
        <li><Link href={'https://www.youtube.com/channel/UC9NsbC0Z11AznlYbIG7Hp2A'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>YouTube</Link></li>
        <li><Link href={'https://vk.com/clickhead'} className='text-sm font-medium text-gray-300 hover:text-gray-500'>VK</Link></li>
      </ul>
    </footer>
  );
};
