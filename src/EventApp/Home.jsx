import React from 'react';
import { NavLink } from 'react-router-dom';
import './EventApp.scss';
import image1 from '../images/home-image1.jpg';
import image2 from '../images/home-image2.jpg';
import image3 from '../images/home-image3.jpg';
import image4 from '../images/home-image4.jpg';
import HomeDetailCard from './HomeDetailCard';
import Testimonial from './Testimonial';
import Data from '../Components/HomeServiceApi';
import Homedata from './Data';
import { useState } from 'react';
const Home = () => {
  const [ServiceData, setServiceData] = useState(Data);
  const [data, setdata] = useState(Homedata);
  return (
    <>
      <section id="Hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="container-text">
              <h1> We create you <span style={{ color: "#990066" }}> celebrate </span> 🎉   </h1>
              <p> Lorem ipsum dolor sit  amet  <br />consectetur  adipisicing  <br /> elit. Consequatu </p>
              <NavLink to='/About' > <button className="btn"> More About us </button> </NavLink>
            </div>
            <div className="container-image">
              <img className='image1' src={image1} alt="image1" />
              <img className='image2' src={image2} alt="image2" />
              <img className='image3' src={image3} alt="image3" />
               <img className='image4' src={image4} alt="image4" />  
            </div>
          </div>
        </div>
      </section>
      <section id="home-detail">
        <h1 className='home-detail-headig'> About Us </h1>
        <HomeDetailCard data={data} />   {/*a separate component created*/}
        <NavLink to='/About' > <button className="btn"> More About us </button> </NavLink>

      </section>
      {/* #################################### Our home  services #####################################  */}
      <h1 className=' App-header text-center fs-15 fw-bold mt-15' style={{color:"grey", marginBottom:"5rem", marginTop:"5rem"}} > Our services </h1>
      <section id="services" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"6rem" }}>
        {
          ServiceData.map((currele) => {
            const { id, name, title, description, image } = currele;
            return (
              <>
                <div className="services-card-container" key={id}>
                  <div className="services-cards">
                    <div className="services-card-body">
                      <small className="idee"> {id} </small>
                      <h3 className=' fw-bold fs-9 mt-5'> {name} </h3>
                      <h2 className=' fs-7'> {title} </h2>
                      <p className=' fs-6'> {description} </p>
                      <div className="service-card-image">
                        <img  src={image} alt="My image"  style={{height:"25vh"}} />
                      </div>

                    </div>
                  </div>
                </div>
              </>
            )
          })
        }

      </section>
      <NavLink to='/Services#service' > <button className="btn moreServices "> More Services </button> </NavLink>
      <Testimonial />

    </>
  )
}

export default Home;