import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import Logo from '../../assets/logoicon.svg';
import Icon1 from '../../assets/services-icon-4.svg';
import Icon2 from '../../assets/services-icon-2.svg';
import Icon3 from '../../assets/services-icon-3.svg';
import Icon4 from '../../assets/services-icon-4.svg';

function PageServices() {
  const Cards = [
    { ImgUrl: Icon1, Heading: 'Fresh Product', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon2, Heading: 'Skilled Chefs', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon3, Heading: 'Drinks', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon4, Heading: 'Vegan Cuisine', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon1, Heading: 'Fresh Product', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon2, Heading: 'Skilled Chefs', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon3, Heading: 'Drinks', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon4, Heading: 'Vegan Cuisine', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
  ];

  return (
    <section className="page-services-main">
      <div className='max-w-7xl mx-auto' data-aos="fade-in">
        <div className="page-services-heading text-center flex items-center flex-col">
          <img src={Logo} alt="Logo" />
          <h1 className="menu-heading text-3xl xl:text-5xl font-bold my-6 text-[var(--text-light)]">
            Our Special Services
          </h1>
          <h4 className="menu-sub-heading max-w-2xl mb-10">
            Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices.
            Vestibulum ante ipsum primis in faucibus orci luctus.
          </h4>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
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

          {Cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="services-card cursor-pointer">
                <div className="card-content m-10 text-center">
                  <img src={card.ImgUrl} alt="Service Icon" className="mx-auto max-w-[80px]" />
                  <h3 className="text-[var(--text-light)] my-8 text-lg xl:text-2xl font-bold">{card.Heading}</h3>
                  <p>{card.Description}</p>
                  <button className="px-8 py-3 my-6 rounded-full text-md bg-transparent border text-white border-[#fff3] transition-all duration-200 hover:border-[var(--text-secondary)] hover:bg-[var(--text-secondary)]">
                    <a href="/">See More</a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default PageServices;
