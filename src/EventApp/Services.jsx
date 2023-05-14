import React from 'react'
import Testimonial from './Testimonial';
import OurServices from './OurServices';
import './EventApp.scss';
import {AiOutlineArrowRight} from 'react-icons/ai';
const Services = () => {
  return (
    <> 


     <section className="services-hero">
      <div className="services-hero-container">
        <h1> Our Services  </h1>
      </div>
      <a href="#testimonial" className='scroll__down text-decoration-none' > <AiOutlineArrowRight /> Scroll Down <AiOutlineArrowRight  /> </a>
     </section>
    <OurServices />
    <section id="testimonial">
    <Testimonial />
    </section>
    
     </>
    
  )
}

export default Services;