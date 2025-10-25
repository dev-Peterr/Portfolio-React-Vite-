import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>Brambifa Peter</div>
      <ul className='nav-menu'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      {/* <div className='nav-connect'>Connect With Me</div> */}
    </div>
  )
}

export default Navbar