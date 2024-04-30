"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const OrderProduct = () => {
    const router = useRouter();
    const handleClick = () => {
        alert("Placing your order");
        router.push('/');
        
    }

  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Order Product</button>
    </div>
  )
}

export default OrderProduct