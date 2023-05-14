import React, { useState } from 'react';
import TestimonialApi from '../Components/TestimonialApi';
// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonial = () => {
  const [test, settest] = useState(TestimonialApi);
  return (
    <>

<section id="Testimonial">
<h5 className='Test-heading' > Review from clients </h5>
  <h2 className='test-headin2'> Testimonial </h2>
  <Swiper className="container testimonial__container" 
  // Install swiper module
   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
    pagination={{ clickable: true }}>
  {
    test.map((currele)=>{
      return (
      <>

      <SwiperSlide className="testimonial"  >
      <div className="client__avatar">
        <img src={currele.image} alt="Mickle " />
      </div>
      <div className="client__reviews-detail">
        <h5> {currele.name} </h5>
        <small className="review"> {currele.review} </small>
        </div>
    </SwiperSlide>
      </>  
      )
    })
  }
  </Swiper>
</section>
    </>
  )
}

export default Testimonial;