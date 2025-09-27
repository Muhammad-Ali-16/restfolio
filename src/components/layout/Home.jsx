import Hero from '../../homeSections/Hero'
import About from '../../homeSections/About'
import Services from '../../homeSections/Services'
import Menu from '../../homeSections/Menu'
import Teams from '../../homeSections/Teams'

function Home() {

  return (
    <section className='home-main'>
      <Hero />
      <About />
      <Services />
      <Menu />
      <Teams />
    </section>
  )
}

export default Home
