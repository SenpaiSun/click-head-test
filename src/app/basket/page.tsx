import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Корзина",
  description: "Корзина",
};

export default function Basket() {
  return (
    <div className='min-h-screen'>
      <h1>Basket</h1>
    </div>
  );
};
