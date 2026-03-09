import React from 'react'
import img2 from '../Asset/c1.jpg'
import img3 from '../Asset/c2.jpg'
import img4 from '../Asset/c3.jpg'
import './Home.css'
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


function Home() {
  return (
    <div>
      <div id="carousel" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item ">
  <img src={img2} alt="" />
    </div>
    <div class="carousel-item active">
  <img src={img3} alt="" />
    </div>
    <div class="carousel-item">
     <img src={img4} alt="" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>

  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  
  </button>
</div>



<div className='shan1'>
  <div ><p>Filters</p></div>
  <div><p>Top Seng</p></div>
  <div><p>Telugu</p></div>
  <div><p>English</p></div>
  <div><p>Drama</p></div>
  <div><p>Romance</p></div>
  <div><p>3D</p></div>

</div>

<div className='chennai'><h1>Now Showing In Chennai</h1></div>


<div className='move1'>
  <div>
    <img src={img5} alt="" />
    <h2>Ghilli</h2>
  </div>
  <div>
    <img src={img6} alt="" />
    <h2>With Love</h2>
    </div>
  <div>
    <img src={img7} alt="" />
    <h2>Thunivu</h2>
  </div>
  <div>
    <img src={img8} alt="" />
    <h2>Couple Family</h2>
  </div>

</div>

<div className='move2'>
  <div>
    <img src={img9} alt="" />
    <h2>Threi</h2>

  </div>
  <div>
    <img src={img10} alt="" />
    <h2>Fourth Flour</h2>

  </div>
  <div>
    <img src={img11} alt="" />
    <h2>The Kerala Story</h2>

  </div>
  <div>
    <img src={img12} alt="" />
    <h2>Veram</h2>

  </div>

</div>

<div className='move3'>
  <div>
    <img src={img13} alt="" />
    <h2>Couple Family</h2>

  </div>
  <div>
    <img src={img14} alt="" />
    <h2>Seream 7</h2>

  </div>
  <div>
    <img src={img15} alt="" />
    <h2>My Lord</h2>

  </div>
  <div>
    <img src={img16} alt="" />
    <h2>Vishu Vinyasam</h2>

  </div>
</div>
    </div>
  )
}

export default Home