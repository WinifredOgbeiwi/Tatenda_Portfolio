import React, { useEffect } from 'react'
import Navbar from './Home/Navbar'
import Hero from './Home/Hero'
import About from './Home/About'
import Portfolio from './Home/Portfolio'
import Partner from './Home/Partner'
import Projects from './Home/Projects'
import CallToAction from './Home/CallToAction'
import Reviews from './Home/Reviews'
import Pricing from './Home/Pricing'
import CallToAction2 from './Home/CallToAction2'
import Footer from './Home/Footer'


function App() {

  return (
    <>
      <div className='gradient'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Portfolio />
      <Partner />
      <Projects />
      <CallToAction />
      <Reviews />
      <Pricing />
      <CallToAction2 />
      <Footer />
    </>
  )
}

export default App