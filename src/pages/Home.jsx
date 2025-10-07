import Hero from '../sections/home/Hero'
import About from '../sections/home/About'
import Services from '../sections/home/Services'
import Menu from '../sections/home/Menu'
import Teams from '../sections/home/Teams'
import Video from '../sections/home/Video'
import Restaurant from '../sections/home/Restaurant'
import Reservation from '../sections/home/Reservation'
import Blog from '../sections/home/Blog'
import SocialMedia from '../sections/home/SocialMedia'

function Home() {

  return (
    <section className='home-main'>
      <Hero />
      <About />
      <Services />
      <Menu />
      <Teams />
      <Video />
      <Restaurant />
      <Reservation />
      <Blog />
      <SocialMedia />
    </section>
  )
}

export default Home
