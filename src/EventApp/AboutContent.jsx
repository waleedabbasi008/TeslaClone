import React from 'react'
import AboutData from '../Components/AboutContentApi';
import { useState } from 'react';
import './EventApp.scss';
import image from '../images/indoor-location.jpg';
import image2 from '../images/home-image2.jpg';
const AboutContent = () => {
    const [data, setdata] = useState(AboutData);
    return (
        <>
            <section id="about-content">
                <div className="about-content-container">
                                    <div className="content-wrapper">
                                    {/* ######### line 1 ################## */}
                                    <div className="line1">
                                        <div className="about-content-text">
                                         <p> 1 Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Quis nesciunt esse odio <br /> at error, quos ipsam illo <br />. Odit sequi adipisci expedita, amet fugit reiciendis dolorem tenetur, laborum ab consequuntur temporibus! </p>
                                        </div>
                                        <div className="about-content-images">
                                        <img src={image} alt="Abotu image" />
                                        </div>
                                        </div>  <br /> <br /> <br />
                                        {/* ######### line 2 ################## */}
                                        <div className="line2">
                                        <div className="about-content-images">
                                        <img src={image2} alt="Abotu image" />
                                        </div>
                                        <div className="about-content-text">
                                         <p> 2 Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Quis nesciunt esse odio <br /> at error, quos ipsam illo <br />. Odit sequi adipisci expedita, amet fugit reiciendis dolorem tenetur, laborum ab consequuntur temporibus! </p>
                                        </div>
                                        </div>
                                    </div>

        

                </div>
            </section>

        </>
    )
}

export default AboutContent;