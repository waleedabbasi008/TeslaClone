import React, {useState} from 'react';
import { BiPhoneCall } from "react-icons/bi";
import './EventApp.scss';
import ContactApi from '../Components/ContactApi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_27862', 'template_u99u5pd', form.current, 'user_HlVSf-C8o7SCagUkh');
    e.target.reset();
  };
const [data, setdata] = useState(ContactApi);
  return (
    <>
     <section className="contact-head">
       <div className=".contact-container">
         <div className="contact-container-text">
           <h1 className='heading-contact'> Get in touch  </h1>
           <p className="contact-para"> Want to get in touch with us ? we'd love to hear that. her is the way that you can in touch with us </p>
         </div>
       </div>
     </section>
     <section className="contact-cards">
      <div className="card1-body">
       <p className="icon fs-26"> <BiPhoneCall /> </p>
       <p className='card1-body-para' style={{fontWeight:'600', fontSize:"2rem" }}> Talk to say </p>
       <p style={{fontWeight:'600', fontSize:"1.5rem" }}> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nemo inventore nihil molestiae <br /> tempora unde nulla, modi veniam <br /> minima vero repellendus. </p>
       <p className="number" style={{color:"blue"}}> +923170542307 </p>
</div>
      <div className="card2-body">
       <span className="icon">    </span>
       <p style={{fontWeight:'600', fontSize:'2rem'}}> Talk to say </p>
       <p style={{fontWeight:'600', fontSize:"1.5rem" }} > Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nemo inventore nihil molestiae <br /> tempora unde nulla, modi veniam <br /> minima vero repellendus. </p>
       <button className="btn btn-outline-secondary"> Contact support </button>
</div>
     </section>
       <h2 style={{textAlign:"center", fontSize:"2.5rem", marginTop:"6rem"}} > Contact Me </h2>
     <div className="map" style={{marginTop:"35px", textAlign:"center" }}>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.487742724268!2d73.33331397578436!3d33.825530229667386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfdb08f8a5fe21%3A0xe88384c6860e6eb9!2sIslamabad%20-%20Murree%20Expy%2C%20Pakistan!5e0!3m2!1sen!2s!4v1681497232703!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
{/* ########################### Contact form section ###################################### */}



     <section id="Contact">
       <div className="container contact__container" >
         <div className="contact__options">
         {
           data.map((currele)=>{
             return (
               <>
           <article className="contact__option">
           <p className='contact__option-icon' > {currele.icon} </p>
           <h4> {currele.name} </h4>
           <h5> {currele.username} </h5> 
           <a href={currele.link} target="_blank" className=' text-decoration-none' > Send a message  </a>
           </article>
               </>
             )
           })
         }
          
         </div>
         {/* end of the contact options */}
         
         <form onSubmit={sendEmail} >
           <input type="text" name='name' placeholder='Your full name' required  />
           <input type="email" name='email' placeholder='Your email' required />
           <textarea name=" message "  rows="7" required></textarea>
           <button type='submit' className='btn btn-primary m-auto'>  Submit </button>
         </form>
       </div>
     </section>
    </>
  )
}

export default Contact;