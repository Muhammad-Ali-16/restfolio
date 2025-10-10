import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import TestimonialsImg1 from '../../assets/team-1.jpg'
import TestimonialsImg2 from '../../assets/team-2.jpg'
import TestimonialsImg3 from '../../assets/team-3.jpg'
import TestimonialsImg4 from '../../assets/team-4.jpg'


function Testimonials() {

  const TestimonialsCards = [
    { imgUrl: TestimonialsImg1, discription: "Nullam sit amet sem metus. Nam nec metus eudia viverra nec nibh. Donec euismod malesuada, quis egestas eget. Vivmus quam erat slliitudin.", name: "Liam Olivia" },
    { imgUrl: TestimonialsImg2, discription: "Nullam sit amet sem metus. Nam nec metus eudia viverra nec nibh. Donec euismod malesuada, quis egestas eget. Vivmus quam erat slliitudin.", name: "Ellie-mae" },
    { imgUrl: TestimonialsImg3, discription: "Nullam sit amet sem metus. Nam nec metus eudia viverra nec nibh. Donec euismod malesuada, quis egestas eget. Vivmus quam erat slliitudin.", name: "Oliver James" },
    { imgUrl: TestimonialsImg4, discription: "Nullam sit amet sem metus. Nam nec metus eudia viverra nec nibh. Donec euismod malesuada, quis egestas eget. Vivmus quam erat slliitudin.", name: "Caleb Andrew" }

  ]

  return (
    <section className='testimonials-main max-w-common'>
      <div className='testimonials-content-main bg-[url(/testimonials-bg.jpg)] py-[120px] bg-cover bg-no-repeat'>
        {/* -----------Testimonials-Main-Heading---------- */}
        <div className='testimonials-heading-main pb-6 flex flex-col justify-center items-center'>
          <h2
            className='testimonials-heading text-2xl xl:text-4xl font-bold py-5 px-10 text-[var(--text-light)] border-b border-dashed border-[var(--color-brown)]'
          >
            <span className='text-[var(--text-secondary)]'> " </span>What Client Says?
          </h2>
        </div>

        {/* -----------Testimonials---------- */}
        <div className="testimonials-cards-main" data-aos='fade-in'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              956: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false
              },
              576: {
                slidesPerView: 1,
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

            {/* -----------Testimonials-Cards---------- */}
            {TestimonialsCards.map((testimonialsCard, i) => (
              <SwiperSlide key={i}>
                <div className='testimonials-card pb-6 flex flex-col justify-center items-center text-center space-y-10' >
                  <h5 className="card-discription max-w-2xl text-lg xl:text-2xl">{testimonialsCard.discription}</h5>
                  <div className="card-info flex flex-row text-start space-x-6 items-center">
                    <img src={testimonialsCard.imgUrl} alt={`testimonial-img-${i + 1}`} loading='lazy' className='h-[90px] w-[90px] rounded-full' />
                    <div className='space-y-1'>
                      <h3 className='text-[var(--text-light)] text-xl font-semibold'>{testimonialsCard.name}</h3>
                      <h6 className='text-[var(--color-brown)] text-sm'>Restaurant Clients</h6>
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

export default Testimonials