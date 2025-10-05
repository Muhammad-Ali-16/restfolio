import Logo from '../assets/logoicon.svg'
import Teams from "../homeSections/Teams"
import Reservation from "../homeSections/Reservation"
import SocialMedia from "../homeSections/SocialMedia"
import Services from "../homeSections/Services"
import About from '../homeSections/About'
import Brands from './Brands'
import Testimonials from './Testimonials'

function PageAbout() {
    return (
        <section className='page-about-main relative'>
            <div className='page-about-content relative'>
                <About />
                {/* -----------Services-Main---------- */}
                <div className='text-center flex items-center flex-col' data-aos='fade-in'>
                    <img src={Logo} alt="Logo" />
                    <h1 className="menu-heading text-3xl xl:text-5xl font-bold my-6 text-[var(--text-light)]">Our Special Services</h1>
                    <h4 className="menu-sub-heading max-w-2xl mb-10">Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.</h4>
                </div>
                <Services />
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