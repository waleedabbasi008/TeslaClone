import React from 'react';
import {CartState } from '../Context/Context';
const Home = () => {
  const {state , product} = CartState;
  console.log(state, product)  


  return (
    <>
       <div className="home">
        {/* <Filters></Filters> */} 
         <h1> {state} </h1>
       </div>
    </>
  )
}

export default Home;