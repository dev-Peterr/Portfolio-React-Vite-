import React from 'react'
import Navbar from './views/Navbar/Navbar'
import Hero from './views/HeroSection/Hero'
import AboutMe from './views/AboutMe/AboutMe'
import MyServices from './views/MyServices/MyServices'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <MyServices />
    </div>
  )
}

export default App