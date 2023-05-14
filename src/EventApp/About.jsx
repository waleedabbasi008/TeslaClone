import React, { useState } from 'react'
import './EventApp.scss';
import HomeDetailCard from './HomeDetailCard';
import Homedata from './Data';
import AboutContent from './AboutContent';
const About = () => {
  const [data, setdata] = useState(Homedata);
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-content">
            <h1> About us  </h1>
          </div>
        </div>
      </section>
      <section className="about-detail">

        <AboutContent />
        <h1 className='about-heading'> Who we are? </h1>
        <HomeDetailCard data={data} />
      </section>
    </>
  )
}

export default About;