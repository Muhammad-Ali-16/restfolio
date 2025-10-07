import React, { useEffect, useState } from 'react'
import HeroImg1 from '../../assets/hero-1.jpg'
import HeroImg2 from '../../assets/hero-2.jpg'
import Button from '../../components/common/Button'

function Hero() {

  const carouselContents = [
    { index: '0', url: HeroImg1, title: 'Fresh and delicious restaurant', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis modi, itaque eaque alias sequi. Necessitatibus officiis modi, itaque eaque alias sequi' },
    { index: '1', url: HeroImg2, title: 'Provide Healthy and fresh food', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis modi, itaque eaque alias sequi. Necessitatibus officiis modi, itaque eaque alias sequi' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev === carouselContents.length - 1 ? 0 : prev + 1
        return next
      })

    }, 8500)
    return () => { clearInterval(interval) }
  }, [carouselContents.length])


  return (
    <section className='hero-main overflow-x-hidden select-none'>
      <div className='hero-content relative h-[100vh] flex items-center justify-center'>
        {/* -----------Carousel-Main---------- */}
        {carouselContents.map((content, i) => (
          <div
            key={content.index}
            className={`carousel-main flex justify-center items-center text-center absolute inset-0 transition-opacity duration-700 ease-in-out ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={content.url} alt="Carousel-Img"
              className="carousel-img w-full h-full object-cover"
            />
            <div className="carousel-overlay absolute inset-0 bg-black/40" />
            {/* -----------Carousel-Content---------- */}
            <div className="carousel-content absolute inset-0 flex flex-col items-center justify-center text-[var(--text-light)] px-3">
              <h1
                className={`arousel-heading w-full text-4xl lg:text-6xl lg:max-w-2xl xl:text-9xl xl:max-w-7xl font-bold uppercase transition-all duration-700 ${i === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              >
                {content.title}
              </h1>
              <p
                className={`carousel-discription w-full text-sm lg:text-xl lg:max-w-6xl xl:max-w-3xl my-8 lg:my-10 transition duration-700 ${i === currentIndex ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}
              >
                {content.discription}
              </p>
              <div
                className={`carousel-btns space-x-4 space-y-4 transition-all duration-500 ${i === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              >
                <Button
                  Name="hero-btn" AdditonalClass="bg-[var(--color-brown)] text-[var(--text-light)]" Text="Discover More +"
                />
                <Button
                  Name="hero-btn" AdditonalClass="bg-[var(--color-dark-2)] text-[var(--text-light)]" Text="Food Menu +"
                />
              </div>
            </div>
          </div>
        ))}
        {/* -----------Pagination---------- */}
        <div className="paginations-main absolute bottom-10 space-x-6 z-10">
          {carouselContents.map((pagination, i) => (
            <button
              key={pagination.index}
              onClick={() => { setCurrentIndex(i) }}
              className={`pagination-btn h-2 w-2 rounded-full cursor-pointer ${i === currentIndex ? 'bg-white outline outline-white outline-offset-6' : 'bg-white/70'}`}>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
