import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer>
        <a href="" className='footer__logo text-center fw-bolder' > Riwayat events </a>
        <ul className="permalinks">
          <li className="Navitem"> <NavLink to='/' > Home  </NavLink> </li>
          <li className="Navitem"> <NavLink to='/About' > About  </NavLink> </li>
          <li className="Navitem"> <NavLink to='/Services' > Services  </NavLink> </li>
          <li className="Navitem"> <NavLink to='/Contact' > Contact  </NavLink> </li>
        </ul>
        <div className="footer__social">
          <a target='blank' href="https://l.wl.co/l?u=https%3A%2F%2Fwww.facebook.com%2FRiwayatEvents143">  <BsFacebook /> </a>
          <a href="https://l.wl.co/l?u=http%3A%2F%2Fwww.instagram.com%2Friwayatevents143">  <BsInstagram /> </a>
          <a href="https://twitter.com">  <BsTwitter /> </a>
        </div>
        <div className="footer__copyright">
          <small> &copy; Waleed. All rights reserved </small>
        </div>
      </footer>
    </>
  )
}

export default Footer;