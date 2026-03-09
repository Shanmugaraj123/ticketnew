import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Asset/TICKET_logo.jpg'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'





function Navbar() {
  return (
    <div>
        <nav className='nav'>
          <div>
             <div style={{marginLeft:"30px"}}><img src={img1} alt="" /></div>
          </div>

          <div className='nav2'>
           <div><Link style={{textDecoration:"none"}} to='/'>Home</Link></div>
            <div><Link style={{textDecoration:"none"}} to='/Movies'>Movies</Link></div>
              <div><Link style={{textDecoration:"none"}} to='/Theatres'>Theatres</Link></div>
              <div><Link style={{textDecoration:"none"}} to='/Orders'>Orders</Link></div>
              </div>
              
              <div className='input'>

                <div style={{marginTop:"10px"}}>
                <input type="text"placeholder='Search For Movies' style={{padding:"10px 0px", borderRadius:"8px", textAlign:"center"}}/>
              </div>

          <div style={{marginTop:"18px"}}>
             <Link style={{textDecoration:"none"}}to='/Login'><FontAwesomeIcon icon={faUser} /></Link>
          </div>
              </div>
        </nav>

       
    </div>
  )
}
export default Navbar