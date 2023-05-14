import React from 'react';
import './EventApp.scss';
const HomeDetailCard = ({ data }) => {
    console.log(data);
    return (
        <>
            <div className="home-detail-container">
                <p className='paragraph' > Mohsin malik sit amet consectetur adipisicing elit. Numquam saepe ipsa sed non facilis aperiam nisi labore sint eveniet fugit porro iure dicta laborum totam, dolorem similique possimus consectetur. Facere maxime ducimus quibusdam iste atque saepe recusandae impedit blanditiis voluptas doloribus necessitatibus accusantium nobis iure eveniet, magni voluptates delectus porro? </p>
                <div className="home-detail-card">
                    {
                        data.map((currele) => {
                            const { id, image, title, description } = currele;
                            return (
                                <>
                                    <div className="card-body" key={id}>
                                        <img src={image} alt="My image" />
                                        <div className="image-description-section">

                                            <h1> {title}  </h1>  <br /> <br />
                                            <p> {description} </p>
                                        </div>
                                    </div>
                                </>
                            )

                        })
                    }
                </div>

            </div>

        </>
    )
}

export default HomeDetailCard;