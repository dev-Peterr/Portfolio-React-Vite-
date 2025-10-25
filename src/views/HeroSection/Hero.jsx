import React from 'react'
import './Hero.css';
import peterr from '../../assets/peterr.jpg';

const Hero = () => {
  return (
    <>
    <div className='hero'>
      <img className='hero-img' src={peterr} alt="" />
      <h1 className='hero-text'>I'm <span className='hero-span'>Brambifa Peter Son-of-God</span>, based in Lagos, Nigeria.</h1>
      <p>a software engineer blending design and security to craft scalable, intelligent, and modern web applications.</p>
      <div className="hero-btn">
        <button className="hero-connect"><a href="">Connect with Me</a></button>
        <button className="hero-resume"><a href="">My Resume</a></button>
    </div>
    </div>
    
    </>
  )
}

export default Hero