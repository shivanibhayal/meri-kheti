import React from 'react'
import slide1 from "../assets/images/slider1.jpeg";
import slide2 from "../assets/images/slider2.jpeg";
import slide3 from "../assets/images/slider3.jpeg";
import slide4 from "../assets/images/slider4.jpeg";
const Slider = () => {
  return (
    <div id="carouselExampleInterval" class="carousel slide mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      
      <img src={slide1} class="d-block w-100" alt="img1" />
    
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={slide2} class="d-block w-100" alt="img2"/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="img3"/>
    </div>
     <div class="carousel-item">
      <img src={slide4} class="d-block w-100" alt="img4"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon previousicon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon nexticon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider
