import React from 'react';
import './EventApp.scss';
const ServicesCard = ({ServiceData}) => {
    return (
        <>
            <section id="service">

                {
                    ServiceData.map((currele) => {
                        const { id, name, title, description, image } = currele;
                        return (
                            <>
                                <div className="services-card-container" key={id}>
                                    <div className="services-cards">
                                        <div className="services-card-body">
                                            <small className="idee"> {id} </small>
                                            <h3 className=' fw-bold fs-9 mt-5 d-none'> {name} </h3>
                                            <h2 className=' fs-7'> {title} </h2>
                                            <p className=' fs-6'> {description} </p>
                                            <div className="service-card-image">
                                                <img src={image} style={{width:"100%", height:"300px"}} alt="My image" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </section>
            <a href="#service" className='goToTop' > Go to top </a>

        </>
    )
}

export default ServicesCard;