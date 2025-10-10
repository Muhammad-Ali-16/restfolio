import Button from '../../components/common/Button'
import AboutImg2 from '../../assets/about-1.jpg'
import AboutImg1 from '../../assets/about-2.jpg'


function About() {
    return (
        <section
            className={`about-main w-full relative h-auto pb-15 xl:pb-25 overflow-hidden 
        before:content[] before:absolute before:-z-1 before:inset-0 before:back before:bg-[url(/about-pattern.png)] bg-contain bg-center`}
        >
            <div className='about-content-main max-w-common grid grid-cols-6 content-center'>
                {/* -----------About-Main-Heading---------- */}
                <div className="about-heading-main text-[var(--text-light)] font-semibold col-span-full xl:col-span-4 xl:col-start-2 xl:col-end-7 xl:max-w-2xl w-full px-auto lg:px-5 pt-15 xl:pt-36">
                    <h1 className='text-4xl lg:text-5xl xl:text-7xl xl:leading-22 leading-13' data-aos="fade-in" >Certified Restfolio Restaurant Brand Since 1997</h1>
                </div>
                {/* -----------About-Content---------- */}
                <div className="about-content grid grid-rows-1 grid-cols-3 col-span-full mt-16 gap-9">
                    <img src={AboutImg1} alt="about-img" className='col-span-full xl:col-span-1 place-self-center' data-aos="fade-in"/>
                    <div className="about-discription col-span-full xl:col-span-1 space-y-10 lg:text-[13px] xl:text-[15px]" data-aos="fade-in">
                        <p>Donec maximus ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea dictumst. esent consequat mauris nec pulvinar tristique. Fusce laoreet orci euismod tincidunt tincidunt. Nam sit amet consequat massa. Cras condimentum, urna vel commodo volutpat, orci libero placerat dolor, non tincidunt.</p>
                        <p>Donec maximus ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea. Praesent consequat mauris nec pulvinar.</p>
                        <Button Text='More About +' Name="about-btn" AdditonalClass='bg-[var(--text-secondary)] text-[var(--text-light)] mt-6'data-aos="fade-in" />
                    </div>
                    <img src={AboutImg2} alt="about-img" loading='lazy' className='hidden xl:block max-w-sm relative -top-40' data-aos="fade-in"/>
                </div>
            </div>
        </section>
    )
}

export default About
