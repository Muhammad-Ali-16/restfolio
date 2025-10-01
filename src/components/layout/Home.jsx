import Hero from '../../homeSections/Hero'
import About from '../../homeSections/About'
import Services from '../../homeSections/Services'
import Menu from '../../homeSections/Menu'
import Teams from '../../homeSections/Teams'
import Video from '../../homeSections/Video'
import Restaurant from '../../homeSections/Restaurant'
import Reservation from '../../homeSections/Reservation'
import Blog from '../../homeSections/Blog'

function Home() {

  return (
    <section className='home-main'>
      <Hero />
      <About />
      <Services />
      <Menu />
      <Teams />
      <Video />
      <Restaurant/>
      <Reservation/>
      <Blog/>
    </section>
  )
}

export default Home
