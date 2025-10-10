import Teams from "../sections/home/Teams"
import Reservation from "../sections/home/Reservation"
import SocialMedia from "../sections/home/SocialMedia"
import About from '../sections/home/About'
import Brands from '../sections/shared/Brands'
import Testimonials from '../sections/shared/Testimonials'
import PageServices from '../sections/shared/SharedServices'

function PageAbout() {
    return (
        <section className='page-about-main relative'>
            <div className='page-about-content relative'>
                <About />
             <PageServices/>
                <Teams />
                <Testimonials />
                <Brands />
                <Reservation />
                <SocialMedia />
            </div>
        </section>
    )
}

export default PageAbout