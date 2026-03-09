import React from 'react'
import img1 from '../Asset/TICKET_logo.jpg'
import './Orders.css'


function Orders() {
  return (
    <div>

      <div className='Orders'>
        <img src={img1} alt="" />
        <h1>Enter Your Mobile Number</h1>
        <input type="number" placeholder='Enter The number' /><br />
        <button>Continue</button>
      </div>

    </div>
  )
}

export default Orders