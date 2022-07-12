import React from 'react'
import './Orders.css'
import Avatar from '@mui/material/Avatar';
export default function Order() {
  return (
    <div className='order-detail'>
        <span className='order-numb'> #876123</span>
        <div className='order-name'> 
 
         Jake El Mir </div>
        <span className='order-product'>1 GB-7 Days- UAE</span>
        <span className='order-date'> 12 Dec, 2022</span>
        <span className='order-email'>jakeelmir@hotmail.com</span>
        <div className='order-price'>12$</div>
    </div>
  )
}
