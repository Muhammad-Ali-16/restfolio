import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import SocialImg1 from '../assets/menu-3.jpg'
import SocialImg2 from '../assets/restaurant-1.jpg'
import SocialImg3 from '../assets/about-2.jpg'
import SocialImg4 from '../assets/social-4.jpg'
import SocialImg5 from '../assets/services-3.jpg'
import SocialImg6 from '../assets/blog-1.jpg'
import SocialImg7 from '../assets/about-1.jpg'
import SocialImg8 from '../assets/blog-3.jpg'

function SocialMedia() {

    const SocialMediaImages = [
        { imgUrl: SocialImg1 },
        { imgUrl: SocialImg2 },
        { imgUrl: SocialImg3 },
        { imgUrl: SocialImg4 },
        { imgUrl: SocialImg5 },
        { imgUrl: SocialImg6 },
        { imgUrl: SocialImg7 },
        { imgUrl: SocialImg8 },
    ]

    return (
        <section className='social-media-main py-12 overflow-hidden'>
            <div className='content-main max-w-common'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        956: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            centeredSlides: false
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            centeredSlides: false
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            centeredSlides: false
                        },

                        1: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            centeredSlides: true
                        }
                    }}
                    modules={[Autoplay]} style={{ padding: 12 }}>

                    {/* -----------Social-Media-Images---------- */}
                    {SocialMediaImages.map((data, i) => (
                        <SwiperSlide key={i}>
                            <div className='relative'>
                                <img src={data.imgUrl} alt="social-img" className='cursor-pointer object-cover mx-auto w-[350px] h-[350px]' />
                                <div className="overlay absolute inset-0 transition-all duration-300 bg-black/60 hover:opacity-100 opacity-0 flex justify-center items-center text-2xl text-white"><a href="/"><i className="bi bi-instagram"></i></a></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default SocialMedia