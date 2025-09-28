import RestaurantImg1 from '../assets/restaurant-1.jpg'
import RestaurantImg2 from '../assets/restaurant-2.jpg'

function Restaurant() {
  return (
    <section
      className="restaurant-main w-full relative h-auto py-15 xl:py-25 overflow-hidden"
    >
      <div className='restaurant-content-main max-w-common grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10'>
        {/* -----------Restaurant-Info-1---------- */}
        <div className="restaurant-info-1 col-span-full lg:col-span-2" data-aos="fade-in">
          <img src={RestaurantImg1} alt="Restaurant-Image" className='xl:max-w-3xl ' />
          <div className="restaurant-info-1-discription max-w-2xl lg:mx-0 mx-auto">
            <h1 className='text-4xl lg:text-3xl xl:text-5xl leading-12 lg:leading-15 font-bold text-[var(--text-light)] max-w-xl my-5'>We Create Food in The best restaurant in the city</h1>
            <p className='lg:text-[13px] xl:text-[15px]'>Praesent dignissim, t a gravida dignissim, purus tortor faucibus neque, aliquam vulputate enim ipsum non turpis. Phasellus blandit purus sed fermentum vehicula. Cras fermentum est sit amet.</p>
          </div>
        </div>
        {/* -----------Restaurant-Info-2---------- */}
        <div className="restaurant-info-2 col-span-full lg:col-span-1" data-aos="fade-in" data-aos-delay="300">
          <div className="restaurant-info-2-discription max-w-2xl mt-1">
            <p className='lg:text-[13px] xl:text-[15px]'>Praesent dignissim, turpis a gravida dignissim, purus tortor faucibus neque, aliquam vulputate enim ipsum non turpis. Phasellus blandit purus sed fermentum vehicula Cras fermentum.</p>
            <img src={RestaurantImg2} alt="Restaurant-Image" className='mt-6' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Restaurant