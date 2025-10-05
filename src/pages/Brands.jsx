import BrandImg1 from '../assets/brand-1.png'
import BrandImg2 from '../assets/brand-2.png'
import BrandImg3 from '../assets/brand-3.png'
import BrandImg4 from '../assets/brand-4.png'
import BrandImg5 from '../assets/brand-5.png'
import BrandImg6 from '../assets/brand-6.png'
import BrandImg7 from '../assets/brand-7.png'
import BrandImg8 from '../assets/brand-8.png'
import BrandImg9 from '../assets/brand-9.png'
import BrandImg10 from '../assets/brand-10.png'
import BrandImg11 from '../assets/brand-11.png'
import BrandImg12 from '../assets/brand-12.png'

function Brands() {

  const BrandsImgs = [
    { img: BrandImg1 },
    { img: BrandImg2 },
    { img: BrandImg3 },
    { img: BrandImg4 },
    { img: BrandImg5 },
    { img: BrandImg6 },
    { img: BrandImg7 },
    { img: BrandImg8 },
    { img: BrandImg9 },
    { img: BrandImg10 },
    { img: BrandImg11 },
    { img: BrandImg12 },
  ]

  return (
    <section className='brands-main py-16'>
      <div className="brands-content-main max-w-common">
        {/* -----------Brands-Main-Heading---------- */}
        <div className="brands-heading-main" data-aos="fade-in">
          <h1 className="brands-heading text-3xl xl:text-5xl font-bold my-6 text-[var(--text-light)]">Our Brands</h1>
          <h4 className="brands-sub-heading max-w-2xl mb-10">Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.</h4>
        </div>
        {/* -----------Brands-Images---------- */}
        <div className='brands-images grid grid-rows-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 place-items-center' data-aos='fade-in'>
          {BrandsImgs.map((brandImg, i) => (
            <div key={i} className="flex items-center justify-center w-full h-22 sm:h-28 transition-all duration-250 cursor-pointer border border-white/20 hover:border-white">
              <img src={brandImg.img} alt={`Brand ${i + 1}`} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands