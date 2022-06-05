import React from 'react'
import './SideBar.css'
import simly from '../Pictures/simly.jpeg'
import { Link } from 'react-router-dom'
export default function SideBar() {
  return (
    <div className='menu'>
<img src={simly} className='simly'/>
<Link className='dashboard1' to='/dashboard'>Dashboard</Link>
<Link className='analytics' to='/analytics'>Analytics</Link>
<Link className='orders' to='/orders'>Orders</Link>
<Link className='newEsim' to='/newEsim'>New eSIM</Link>
<Link className='settings' to='settings'>Settings</Link>
    </div>
  )
}
