import React from 'react'
import './MyServices.css';
import theme_pattern from '../../assets/theme_pattern.svg'; 
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { FaCode, FaSearch, FaPaintBrush } from "react-icons/fa";

const MyServices = () => {
  return (
    <div className='services-container'>
        <div className='services-title'>
            <h1>My Services</h1>
            <img className='services-pattern' src={theme_pattern} alt="" />
        </div>
        <div className="services-section">
            <ServiceCard 
                number="01"
                title="Web Development" 
                subtitle="Building modern, responsive, and secure websites."
                icon={<FaCode />}
            />
            <ServiceCard 
                number="02"
                title="Code Review" 
                subtitle="Ensuring clean, efficient, and maintainable codebases."
                icon={<FaSearch />}
            />
            <ServiceCard 
                number="03"
                title="Graphics Design" 
                subtitle="Crafting engaging visuals that communicate and inspire."
                icon={<FaPaintBrush />}
            />
        </div>
    </div>
  )
}

export default MyServices