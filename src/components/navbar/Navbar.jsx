import React, { useState } from 'react'
import {Link} from 'react-scroll'
import {navLinksData} from '../../constants/index.js'
import "./Navbar.css"

const Navbar = () => {
  const [active, setActive] = useState("nav-menu");
  const[toggleIcon, setToggleIcon] = useState("nav-toggler")
  const navToggle = () =>{
     active === "nav-menu" 
     ? setActive("nav-menu nav-active") 
     : setActive("nav-menu");

     //togglerIcon
     toggleIcon === "nav-toggler"
     ? setToggleIcon("nav-toggler toggle")
     : setToggleIcon("nav-toggler");
  };
  const testNow = () =>{
    active === "nav-menu" 
    ? setActive("nav-menu nav-active") 
    : setActive("nav-menu");

    toggleIcon === "nav-toggler"
    ? setToggleIcon("nav-toggler toggle")
    : setToggleIcon("nav-toggler");
  }
  return (
    <nav className="nav">
      <a href="#" className='brand'> Mintesinot</a>
      <ul className={active}>
          {
            navLinksData.map((navlink)=>(
              <li key={navlink._id} className='nav-item'>
                <Link 
                onClick={testNow}
                activeClass='active' 
                to={navlink.link}
                spy = {true}
                smooth = {true}
                offset={-70}
                duration={500} 
                className='nav-link'>
                  {navlink.title}</Link>
              </li>
            ))
          }
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar