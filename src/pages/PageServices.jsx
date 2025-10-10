import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { useState } from 'react'
import VideoUrl from '../assets/video.mp4'
import RotatingIcon from '../sections/shared/RotatingIcon'
import Restaurant from '../sections/home/Restaurant'
import SharedServices from '../sections/shared/SharedServices'
import Testimonials from '../sections/shared/Testimonials'
import SocialMedia from '../sections/home/SocialMedia'
import cardImg1 from '../assets/page-services-1.jpg'
import cardImg2 from '../assets/page-services-2.jpg'
import cardImg3 from '../assets/page-services-3.jpg'
import cardImg4 from '../assets/page-services-4.jpg'
import cardIcon1 from '../assets/services-slider-icon-1.svg'
import cardIcon2 from '../assets/services-slider-icon-2.svg'
import cardIcon3 from '../assets/services-slider-icon-3.svg'
import cardIcon4 from '../assets/services-slider-icon-4.svg'
import HeadingIcon1 from '../assets/services-heading-icon-1.svg'
import HeadingIcon2 from '../assets/services-heading-icon-2.svg'
import HeadingIcon3 from '../assets/services-heading-icon-3.svg'
import VideoBg from '../assets/services-video-bg.jpg'

function PageServices() {
  const [isOpen, setIsOpen] = useState(false)

  const ServicesCards = [
    { heading: 'Fresh Brewed White Coffee', imgUrl: cardImg1, iconUrl: cardIcon1 },
    { heading: 'Fresh Coffee Chocolate Flavor', imgUrl: cardImg2, iconUrl: cardIcon2 },
    { heading: 'Fresh Beans Cup Coffee', imgUrl: cardImg3, iconUrl: cardIcon3 },
    { heading: 'Hot Coffee With Waffles', imgUrl: cardImg4, iconUrl: cardIcon4 },
    { heading: 'Fresh Brewed White Coffee', imgUrl: cardImg1, iconUrl: cardIcon1 },
    { heading: 'Fresh Coffee Chocolate Flavor', imgUrl: cardImg2, iconUrl: cardIcon2 },
    { heading: 'Fresh Beans Cup Coffee', imgUrl: cardImg3, iconUrl: cardIcon3 },
    { heading: 'Hot Coffee With Waffles', imgUrl: cardImg4, iconUrl: cardIcon4 },
  ]

  return (
    <section className='page-services-main'>
      <div className='page-services-content'>

        {/* -----------Page-Services-Cards---------- */}
        <section className='services-cards-main pb-14 pt-20'>
          <div className='cards-content max-w-7xl mx-auto'>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                956: { slidesPerView: 4, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                576: { slidesPerView: 2, spaceBetween: 10 },
                1: { slidesPerView: 1, spaceBetween: 10, centeredSlides: true },
              }}
              modules={[Autoplay]}
              style={{ padding: 12 }}
            >
              {ServicesCards.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className='card border border-white/25 rounded-3xl hover:border-[var(--text-secondary)] transition-all duration-150'>
                    <div className='card-content p-8 space-y-4'>
                      <h1 className='card-heading text-white xl:text-2xl text-xl line-clamp-1'>
                        {card.heading}
                      </h1>
                      <img src={card.imgUrl} alt='card-img' loading='lazy' className='card-img rounded-3xl mx-auto' />
                      <div className='flex flex-row justify-between items-center'>
                        <button>
                          <a href='?' className='card-btn text-md font-josefin'>
                            Read More +
                          </a>
                        </button>
                        <img src={card.iconUrl} alt='card-icon' />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* -----------Page-Services-Video---------- */}
        <section className='services-video-main overflow-hidden relative pb-18 bg-[linear-gradient(to_top,transparent,#0003)] before:content-[] before:absolute before:bg-[#23211F] before:inset-0 before:w-[40%] before:h-[80%] before:-z-1 px-2'>
          <div className='max-w-7xl mx-auto'>

            {/* -----------Video-Main-Heading---------- */}
            <div className='video-heading-main relative max-w-5xl mx-auto grid grid-rows-1 grid-cols-1 xl:grid-cols-2 py-12 before:content-[] before:bg-[url(/services-video-icon.png)] before:absolute before:top-[50px] before:left-0 before:right-0 before:bottom-0 before:bg-no-repeat'>
              <div className='space-y-2'>
                <h1 className='services-heading text-3xl leading-15 xl:text-5xl my-6 text-[var(--text-light)]'>
                  Explore The History Of the bakery.
                </h1>
                <h4 className='services-sub-heading max-w-2xl mb-10'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi sem,
                  tristique vel blandit sed, varius id tellus. Pellentesque pretium bibendum
                  velit, at interdum libero cursus sit amet. Fusce ac faucibus elit.
                </h4>
              </div>
              <div className='space-y-5 xl:place-self-center'>
                <div className='flex flex-row items-center space-x-3'>
                  <img src={HeadingIcon1} alt='heading-icon' />
                  <h4 className='text-white'>Natural Organic Product</h4>
                </div>
                <div className='flex flex-row items-center space-x-3'>
                  <img src={HeadingIcon2} alt='heading-icon' />
                  <h4 className='text-white'>Packaging Design</h4>
                </div>
                <div className='flex flex-row items-center space-x-3'>
                  <img src={HeadingIcon3} alt='heading-icon' />
                  <h4 className='text-white'>French Bakery Food</h4>
                </div>
              </div>
            </div>

            {/* -----------Video-Main---------- */}
            <div className='video-main relative flex'>
              <img src={VideoBg} alt='video-bg' className='object-cover w-full h-full' loading='lazy' />
              <div className='hidden lg:block font-oswald absolute top-1/2 right-0 translate-x-[57%] -translate-y-1/2 -rotate-90 text-7xl font-bold tracking-widest opacity-90'>
                <span className='text-border text-transparent'>Visitors </span>
                <span className='text-[var(--text-secondary)]'>95k</span>
              </div>

              <button
                className='bg-[var(--text-secondary)] outline-8 outline-white/10 h-28 w-28 md:h-32 md:w-32 rounded-full absolute -translate-y-1/2 translate-x-1/2 top-1/2 right-1/2 flex justify-center items-center text-white'
                onClick={() => setIsOpen(true)}
              >
                <i className='bi bi-play-fill text-2xl cursor-pointer'></i>
              </button>
            </div>
          </div>

          {/* -----------Video Overlay---------- */}
          {isOpen && (
            <div className='video-overlay bg-black/75 backdrop-blur-xs h-[100vh] w-full fixed z-[999] inset-0 flex justify-center items-center'>
              <button
                className='absolute top-5 right-10 cursor-pointer text-white text-2xl'
                onClick={() => setIsOpen(false)}
              >
                <i className='bi bi-x-lg'></i>
              </button>

              <video
                src={VideoUrl}
                className='w-[90%] md:w-[70%] lg:w-[60%] rounded-lg'
                controls
              />
            </div>
          )}
        </section>

        <RotatingIcon />
        <Restaurant />
        <SharedServices />
        <Testimonials />
        <SocialMedia />
      </div>
    </section>
  )
}

export default PageServices
