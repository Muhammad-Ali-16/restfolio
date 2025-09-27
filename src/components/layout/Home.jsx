import Hero from '../../homeSections/Hero'
import About from '../../homeSections/About'
import Services from '../../homeSections/Services'
import Menu from '../../homeSections/Menu'
import Teams from '../../homeSections/Teams'
import Video from '../../homeSections/Video'

function Home() {

  return (
    <section className='home-main'>
      <Hero />
      <About />
      <Services />
      <Menu />
      <Teams />
      <Video />
    </section>
  )
}

export default Home
