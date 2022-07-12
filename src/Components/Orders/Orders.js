import React from 'react'
import Order from './Order'
import './Orders.css'
export default function Orders() {
  return (
    <div className='mainOrders'>
<span className='titleOrders'>Orders List</span>
<div className='orders'>
<Order/>
<Order/>
<Order/>
<Order/>
<Order/>
<Order/>
<Order/>
<Order/>
<Order/>
<Order/>
</div>
    </div>
  )
}
