import Hero from '../../homeSections/Hero'
import About from '../../homeSections/About'
import Services from '../../homeSections/Services'
import Menu from '../../homeSections/Menu'

function Home() {

  return (
    <section className='home-main'>
      <Hero />
      <About />
      <Services />
      <Menu />
    </section>
  )
}

export default Home
