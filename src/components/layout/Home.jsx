import React from 'react'
import Hero from '../../homeSections/Hero'
import About from '../../homeSections/About'
import Services from '../../homeSections/Services'

function Home() {
  return (
    <section className='home-main'>
      <Hero />
      <About />
      <Services />
    </section>
  )
}

export default Home
