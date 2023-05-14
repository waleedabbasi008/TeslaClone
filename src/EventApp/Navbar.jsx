import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
    const [isActive, setisActive] = useState(false) //use state hooks for nav toggle btn
    const handleToggle = () => {
        setisActive(!isActive);
        console.log("clicked");
      }
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo">
                        <img src="images/logo.png" alt="logo" />
                        <h2 className="logo-text"> Riwayat Events </h2>
                    </div>
                    <ul className={`${isActive ? 'show__Nav' : 'hide__Nav'} `}>
                        <li className="Navitem"> <NavLink to='/' > Home  </NavLink> </li>
                        <li className="Navitem"> <NavLink to='/About' > About  </NavLink> </li>
                        <li className="Navitem"> <NavLink to='/Services' > Services  </NavLink> </li>
                        <li className="Navitem"> <NavLink to='/Contact' > Contact  </NavLink> </li>
                        

                  <NavLink>  <button className='btn btn-outline-secondary' > Login </button></NavLink>
                    </ul>
                  <button className="nav__toggle-btn"  > <FaBars className='svg' onClick={handleToggle}  /> </button>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar;