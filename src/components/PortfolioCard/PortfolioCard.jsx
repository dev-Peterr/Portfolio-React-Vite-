import React from 'react'
import './PortfolioCard.css'

const PortfolioCard = ({src, alt, href, target = "_blank"}) => {
  return (
    <div className='port-container'>
        <a href={href} target={target} rel="noopener noreferrer">
            <img 
                src={src} 
                alt={alt}
            />
        </a>
    </div>
  )
}

export default PortfolioCard
