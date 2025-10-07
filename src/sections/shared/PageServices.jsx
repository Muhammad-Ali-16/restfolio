import Logo from '../../assets/logoicon.svg'
import Services from '../../sections/home/Services'

function PageServices() {
  return (
    <section className='page-serivces-main'>
      <div className='page-services-heading text-center flex items-center flex-col' data-aos='fade-in'>
        <img src={Logo} alt="Logo" />
        <h1 className="menu-heading text-3xl xl:text-5xl font-bold my-6 text-[var(--text-light)]">Our Special Services</h1>
        <h4 className="menu-sub-heading max-w-2xl mb-10">Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.</h4>
      </div>
   <Services/>
    </section>
  )
}

export default PageServices