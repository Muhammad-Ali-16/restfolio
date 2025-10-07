import Icon1 from '../assets/page-contact-1.svg'
import Icon2 from '../assets/page-contact-2.svg'
import Icon3 from '../assets/page-contact-3.svg'
import Icon4 from '../assets/page-contact-4.svg'


function PageContact() {

  const ContactInfo = [
    { imgUrl: Icon1, contactType: 'Phone', detail: '+55 (1234) 286 22' },
    { imgUrl: Icon2, contactType: 'Mail', detail: 'example@gmail.com' },
    { imgUrl: Icon3, contactType: 'Location', detail: '27 Division St, based New York, USA' },
    { imgUrl: Icon4, contactType: 'Phone', detail: 'Mon- Sun: 7.00 - 22.00' },
  ]

  return (
    <section className='page-contact-main relative mx-1 pt-12 lg:pt-17'>
      <div className='page-contact-content max-w-common relative '>

        {/* -----------Location-Map---------- */}
        <div className="map w-full h-[500px] rounded-lg overflow-hidden shadow-lg grayscale-100 opacity-85">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.383679975721!2d-122.08385148469263!3d37.38605197982967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cae4e08b6f%3A0x43a64c066e1b1e0a!2sMountain%20View%2C%20CA!5e0!3m2!1sen!2sus!4v1696450000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        <div className='grid xl:grid-rows-1 xl:grid-cols-3 mt-22'>
          <div className="contact-info-main xl:col-span-2 col-span-full">
            {/* -----------Contact-Main-Heading---------- */}
            <div className="contact-heading">
              <h1 className="contact-heading text-3xl xl:text-5xl font-bold text-[var(--text-light)]">Contact us</h1>
            </div>
            {/* -----------Contact-Info-Main---------- */}
            <div className="contact-info grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 my-7 lg:my-12 ">
              {ContactInfo.map((info, i) => (
                <div className="info-content flex flex-row space-x-5" key={i}>
                  <img src={info.imgUrl} alt={`${info.contactType}-icon`} />
                  <div className='icon space-y-1'>
                    <h5 className='text-lg'>Our {info.contactType}</h5>
                    <h3 className='text-[var(--text-light)] text-lg'>{info.detail}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* -----------Contact-Form---------- */}
          <div className="contact-form xl:col-span-1 col-span-full bg-[var(--form-bg)] rounded-xl max-w-[450px]">
            <form className="p-8 space-y-8 font-josefin">
              <h2 className="text-white text-2xl font-bold mb-6">Get In Touch.</h2>

              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs text-white/70 mb-2">
                  Your Name*
                </label>
                <input
                  id="name" type="text" className="text-sm bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[var(--text-secondary)] transition" required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs text-white/70 mb-2">
                  Your Email*
                </label>
                <input
                  id="email" type="email" className="text-sm bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[var(--text-secondary)] transition" required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-xs text-white/70 mb-2">
                  Phone*
                </label>
                <input
                  id="phone" type="tel" className="text-sm bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[var(--text-secondary)] transition" required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs text-white/70 mb-2">
                  Message
                </label>
                <textarea id="message" className="text-sm bg-transparent border-b border-white/20 text-white min-h-[120px] resize-none focus:outline-none focus:border-[var(--text-secondary)] transition">
                </textarea>
              </div>

              <button
                type="submit"
                className={`contact-btn bg-[var(--text-secondary)] text-[var(--text-light)] cursor-pointer h-[55px] w-[150px] xl:w-[160px] rounded-full text-sm lg:text-md tracking-wider transition duration-200 hover:-translate-y-0.5`}>
                <h3>Send A Message +</h3>
              </button>
            </form>
          </div>
        </div>

      </div>

    {/* -----------Rotating-Icon---------- */}
      <div className="mt-32 flex justify-center items-center relative 
      after:content-[''] after:absolute after:inset-0 
      after:bg-[length:16px_1.5px] after:bg-repeat-x 
      after:bg-[linear-gradient(to_right,transparent_50%,var(--text-secondary)_50%)]">

        <div className="h-[120px] w-[120px] md:h-[170px] md:w-[170px] lg:h-[200px] lg:w-[200px] bg-[#2B2724] rounded-full flex items-center justify-center relative z-2 translate-y-[-50%]">

          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 animate-spin-slow"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="circlePath"
              d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
              fill="none"
            />
            <text fontSize="14" fill="#d12d2d">
              <textPath
                href="#circlePath"
                startOffset="50%"
                textAnchor="middle"
                className="uppercase tracking-[7px]"
              >
                backery food corner restfolio •
              </textPath>
            </text>
          </svg>

          <span className="text-white relative z-10 text-sm font-medium">
            <img
              src="/contact_rotate_icon.svg"
              alt="icon"
              className="w-[55px] md:w-[65px] lg:w-[80px]"
            />
          </span>
        </div>
      </div>

    </section >
  )
}

export default PageContact