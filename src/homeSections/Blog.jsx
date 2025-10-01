import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Logo from '../assets/logoicon.svg'
import BlogImg1 from '../assets/blog-1.jpg'
import BlogImg2 from '../assets/blog-2.jpg'
import BlogImg3 from '../assets/blog-3.jpg'

function Blog() {

    const BlogCards = [
        { imgUrl: BlogImg1, date: '09', month: 'Aug', person: 'Tanvir', noComments: '02', heading: 'White Hall Buffet Menu Price Address And Good Review' },
        { imgUrl: BlogImg2, date: '28', month: 'Jun', person: 'Amir', noComments: '02', heading: 'The Pan Pacific  Lounge Buffet Menu Price And Address' },
        { imgUrl: BlogImg3, date: '04', month: 'Sep', person: 'Jon', noComments: '02', heading: 'Buffet Stories Canada Menu Price Items And Contact No' },
        { imgUrl: BlogImg1, date: '09', month: 'Aug', person: 'Tanvir', noComments: '02', heading: 'White Hall Buffet Menu Price Address And Good Review' },
        { imgUrl: BlogImg2, date: '28', month: 'Jun', person: 'Amir', noComments: '02', heading: 'The Pan Pacific  Lounge Buffet Menu Price And Address' },
        { imgUrl: BlogImg3, date: '04', month: 'Sep', person: 'Jon', noComments: '02', heading: 'Buffet Stories Canada Menu Price Items And Contact No' }
    ]


    return (
        <section className='blog-main pb-10'>
            <div className='blog-content-main max-w-7xl mx-auto px-2'>
                <div className='blog-heading-main text-center pt-28 flex items-center flex-col' data-aos='fade-in'>
                    {/* -----------Blog-Main-Heading---------- */}
                    <img src={Logo} alt="Logo" />
                    <h1 className="blog-heading text-3xl xl:text-5xl font-bold my-6 text-[var(--text-light)]">Latest New and blogs</h1>
                    <h4 className="blog-sub-heading max-w-2xl mb-10">Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.</h4>
                </div>
                <div className="blog-content" data-aos='fade-in'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            956: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                centeredSlides: false
                            },
                            768: {
                                slidesPerView: 2,
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

                        {/* -----------Blog-Cards---------- */}
                        {BlogCards.map((card, i) => (
                            <SwiperSlide>
                                <div className='blog-card-main select-none border-b border-dashed border-white/30 pb-6' key={i}>
                                    <div className='card-content flex flex-col'>
                                        <div className='card-img relative text-center'>
                                            <img src={card.imgUrl} className=' rounded-lg' />
                                            <h4 className='absolute top-5 right-5 bg-[var(--color-dark)] px-3 py-1 rounded-lg'>{card.date} <br /> {card.month}</h4>
                                        </div>
                                        <div className='card-info'>
                                            <div className='flex flex-row space-x-8 mt-5 mb-2'>
                                                <h6><i className="bi bi-person"></i> by {card.person}</h6>
                                                <h6><i className="bi bi-chat"></i> {card.noComments} Comments</h6>
                                            </div>
                                            <h2 className='text-white text-xl lg:text-2xl xl:text-3xl'><a href='/'>{card.heading}</a></h2>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Blog