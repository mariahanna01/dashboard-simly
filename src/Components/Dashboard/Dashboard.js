import React from 'react'
import'./Dashboard.css'
import Modal from 'react-modal';
import { useState } from 'react';
export default function Dashboard() {

  return (
    <div>
        <span className='dashboard'>Dashboard</span>
        <div className='products'>
          <div className='heart1'>
            <div className='heart2'></div>
          </div>
            <span className='prod1'> 17,000 </span>
            <span className='prod2'> Products Views</span>
        </div>
        <div className='link'>
          <span className='link1'> 7,000</span>
        </div>
        <div className='conv'>
<span className='conv1'> 30%</span>
        </div>
        <div className='sales'>
          <span className='sales1'>$2,000</span>
        </div>
        <br/>
        <div className='reports'>

        </div>
        <div className='countries'>

        </div>
        <br/>
        <div className='recentOrders'>

        </div>
        <div className='top'>

        </div>
    </div>
  )
}
