import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({number, title, subtitle, icon}) => {
  return (
    <div className='service-container'>
      <div className='service-top'>
        <h2 className="service-no">{number}</h2>
        <div className='service-icon'>{icon}</div>
      </div>
        <h2 className="service-title">{title}</h2>
        <p className="service-subtitle">{subtitle}</p>

    </div>
  )
}

export default ServiceCard