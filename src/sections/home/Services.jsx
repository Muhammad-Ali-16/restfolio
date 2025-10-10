import { useState } from 'react'
import Icon1 from '../../assets/services-icon-4.svg'
import Icon2 from '../../assets/services-icon-2.svg'
import Icon3 from '../../assets/services-icon-3.svg'
import Icon4 from '../../assets/services-icon-4.svg'
import ServicesBgImg1 from '../../assets/services-1.jpg'
import ServicesBgImg2 from '../../assets/services-2.jpg'
import ServicesBgImg3 from '../../assets/services-3.jpg'
import ServicesBgImg4 from '../../assets/services-4.jpg'


function Services() {

  const [cardIndex, setCardIndex] = useState(0)

  const BgImages = [
    { BgUrl: ServicesBgImg1 },
    { BgUrl: ServicesBgImg2 },
    { BgUrl: ServicesBgImg3 },
    { BgUrl: ServicesBgImg4 },
  ]

  const Cards = [
    { ImgUrl: Icon1, Heading: 'Fresh Product', Discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon2, Heading: 'Skilled Chefs', Discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon3, Heading: 'Drinks', Discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
    { ImgUrl: Icon4, Heading: 'Vegan Cuisine', Discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
  ]

  return (
    <section className={`services-main h-full relative overflow-hidden`}>
      {/* -----------Services-Background-Images---------- */}
      {BgImages.map((Img, i) => (
        <img src={Img.BgUrl} alt="Background Image" loading='lazy' key={i} className={`w-full h-full absolute inset-0 -z-2 transition-ease-in-out duration-600  object-cover ${cardIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-115'}`} />
      ))}
      <div className="services-overlay bg-black/70 absolute inset-0 -z-1"></div>
      <div className='services-content-main max-w-common'>
        <div className='services-cards grid grid-rows-1 grid-cols-1 xl:grid-cols-4 gap-3 text-center'>
          {/* -----------Services-Cards---------- */}
          {Cards.map((card, i) => (
            <div className={`services-card cursor-pointer ${i < Cards.length - 1 ? 'max-xl:border-b xl:border-e border-[#fff3]' : ''}`} onMouseEnter={() => { setCardIndex(i) }} key={i}>
              <div className='card-content m-10'>
                <img src={card.ImgUrl} alt="Services-Icon" loading='lazy' className='mx-auto max-w-[80px]' />
                <h3 className='text-[var(--text-light)] my-8 text-lg xl:text-2xl font-bold'>{card.Heading}</h3>
                <p>{card.Discription}</p>
                <button className="px-8 py-3 my-6 rounded-full text-md bg-transparent border text-white border-[#fff3] transition-all duration-200 hover:border-[var(--text-secondary)] hover:bg-[var(--text-secondary)]">
                  <a href="/">
                    See More</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
