import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './EventApp/Navbar';
import Home from './EventApp/Home';
import About from './EventApp/About';
import Services from './EventApp/Services';
import Contact from './EventApp/Contact';
import Testimonial from './EventApp/Testimonial';
import {Routes, Route} from 'react-router-dom';
import Footer from './EventApp/Footer';
import './EventApp/EventApp.scss';
const App = ()=>{
    return(
        
        <>
         <Navbar />
         <Routes>
             <Route path='/' element = {<Home />} >  </Route>
             <Route path='/About' element = {<About />} >  </Route>
             <Route path='/Services' element = {<Services />} >  </Route>
             <Route path='/Contact' element = {<Contact />} >  </Route>

         </Routes> 
         <Footer />
        </>
    )
}
export default App;