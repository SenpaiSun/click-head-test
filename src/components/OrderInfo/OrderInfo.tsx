import { OrderSuccessfully } from '@/src/ui/orderSuccessfully/OrderSuccessfully';
import React from 'react';

export const OrderInfo: React.FC = () => {
  return (
    <div>
      <h1 className='text-start text-3xl font-bold m-4 underline underline-offset-3 decoration-8 decoration-green-400 text-gray-700'>Thanks for your order!</h1>
      <OrderSuccessfully />
    </div>
  );
};
