import React from 'react'
import './Move.css'
import img3 from '../Asset/c2.jpg'
import img4 from '../Asset/c3.jpg'
import img5 from '../Asset/s1.jpg'
import img6 from '../Asset/s2.jpg'
import img7 from '../Asset/s3.jpg'
import img8 from '../Asset/s4.jpg'

import img9 from '../Asset/m1.jpeg'
import img10 from '../Asset/m2.jpg'
import img11 from '../Asset/m3.jpg'
import img12 from '../Asset/m4.jpg'
import img13 from '../Asset/a1.jpg'
import img14 from '../Asset/a2.jpg'
import img15 from '../Asset/a3.jpg'
import img16 from '../Asset/a4.jpg'

function Movies(){
  return (
    <div >
    <h4>Now playing</h4>

      <div style={{justifyContent:"space-evenly"}}  className='move11'>
        <div>
          <img src={img5} alt="" /><br/><p>Ghilli</p>
        </div>
        <div>
           <img src={img6} alt="" />  <p>With Love</p>
        </div>
        <div>
          <img src={img15} alt="" /> <p>My Lord</p>
        </div>
      </div>


       <div style={{justifyContent:"space-evenly"}}  className='move12'>
        <div>
          <img src={img7} alt="" /><br/><p>Thunivu</p>
        </div>
        <div>
           <img src={img8} alt=""/>  <p>Couple Family</p>
        </div>
        <div>
          <img src={img16} alt="" /> <p>Vishu Vinyasam</p>
        </div>
      </div>




       <div style={{justifyContent:"space-evenly"}}  className='move13'>
        <div>
          <img src={img9} alt="" /><br/><p>Goat</p>
        </div>
        <div>
           <img src={img10} alt=""/>  <p>Hey Blewenth</p>
        </div>
        <div>
          <img src={img15} alt="" /> <p>Move</p>
        </div>
      </div>




      <div style={{justifyContent:"space-evenly"}}  className='move14'>
        <div>
          <img src={img11} alt="" /><br/><p>The Kerala Story</p>
        </div>
        <div>
           <img src={img12} alt=""/>  <p>Veram</p>
        </div>
        <div>
          <img src={img6} alt="" /> <p>With love</p>
        </div>
      </div>




       <div style={{justifyContent:"space-evenly"}}  className='move15'>
        <div>
          <img src={img13} alt="" /><br/><p>Couple Family</p>
        </div>
        <div>
           <img src={img14} alt=""/>  <p>Seream 7</p>
        </div>
        <div>
          <img src={img4} alt="" /> <p>Lovetoday</p>
        </div>
      </div>


    </div>
  )
}

export default Movies