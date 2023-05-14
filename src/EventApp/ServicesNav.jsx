import React from 'react';
import './EventApp.scss';
const ServicesNav = ({ filterItems, list }) => {
    return (
        <>

            <nav className="services-navbar">
                <div className="services-navbar-container">
                    {
                        list.map((currele) => {

                            return (
                                <>
                                <button className=' btn' onClick={() => filterItems(currele)} > {currele} </button>
                                </>
                            )
                        })
                    }

                </div>
            </nav>
        </>
    )
}

export default ServicesNav;