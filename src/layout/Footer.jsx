import Button from '../components/common/Button'
function Footer() {
  return (
    <footer className='footer-main mx-2 py-10 lg:py-16'>
      <div className="footer-content-main max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* -----------Footer-Top-Main---------- */}
        <div className="footer-top text-center flex justify-center items-center flex-col space-y-4 relative pb-12">
          <img src="/logo.svg" alt="logo" />
          <h4 className="footer-sub-heading max-w-xl text-sm mb-10">Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.</h4>
          <div className='footer-input relative'>
            <input
              required type="email" autoComplete="email" placeholder="Enter Your Email Address..."
              className="font-josefin block w-[85vw] md:w-lg lg:w-2xl rounded-full bg-transparent px-10 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-white/20 placeholder:text-[var(--text-primary)]/75 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6"
            />
            <Button Text='Subscribe Now +' Name="footer-btn" Link='?' AdditonalClass='bg-[var(--text-secondary)] text-[var(--text-light)] my-5 md:my-0 md:absolute top-0 right-0' data-aos="fade-in" />
          </div>
        </div>
        {/* -----------Footer-Links-Main---------- */}
        <div className="footer-links-main grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 py-10 md:py-14 border-y border-dashed border-[#ffffff4f]">

          <div className='footer-link'>
            <h3 className='text-lg text-white my-7'>Social</h3>
            <ul className="footer-links text-sm space-y-3">
              <li className='footer-link'>
                <a
                  href='?'
                  className='font-josefin transition-all duration-150 hover:text-[var(--text-secondary)]'>
                  Facebook
                </a>
              </li>
              <li className='footer-link'>
                <a
                  href='?'
                  className='font-josefin transition-all duration-150 hover:text-[var(--text-secondary)]'>
                  Twitter
                </a>
              </li>
              <li className='footer-link'>
                <a
                  href='?'
                  className='font-josefin transition-all duration-150 hover:text-[var(--text-secondary)]'>
                  Instagram
                </a>
              </li>
              <li className='footer-link'>
                <a
                  href='?'
                  className='font-josefin transition-all duration-150 hover:text-[var(--text-secondary)]'>
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-link'>
            <h3 className='text-lg text-white my-7'>More Services</h3>
            <ul className="footer-links text-sm space-y-3">
              <li className='footer-link'>
                <a
                  href='/about'
                  className='font-josefin transition-all duration-150 hover:text-[var(--text-secondary)]'>
                  About us
                </a>
              </li>
              <li className='footer-link'>
                <a
                  href='/privacy_policy'
                  className='font-josefin transition-all duration-150 hover:text-[var(--text-secondary)]'>
                  Case Studies
                </a>
              </li>
              <li className='footer-link'>
                <a
                  href='/privacy_policy'
                  className='font-josefin transition-all duration-150 hover:text-[var(--text-secondary)]'>
                  Privacy Policy
                </a>
              </li>
              <li className='footer-link'>
                <a
                  href='/contact'
                  className='font-josefin transition-all duration-150 hover:text-[var(--text-secondary)]'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-link'>
            <h3 className='text-lg text-white my-7'>Working Hours</h3>
            <ul className="footer-links text-sm space-y-3">
              <li className='footer-link'>
                <h3>SUNDAY TO TUESDAY</h3>
                <h5>7.00am - 6.00pm</h5>
              </li>
              <li className='footer-link'>
                <h3>FRIDAY TO SATURDAY</h3>
                <h5>8.00am - 6.00pm</h5>
              </li>
            </ul>
          </div>

          <div className='footer-link'>
            <h3 className='text-lg text-white my-7'>Contact</h3>
            <ul className="footer-links text-sm space-y-3">
              <li className='footer-link'>
                785 15h Street - Sydney Harbor Bridge of Sydney, #Australia.
              </li>
              <li className='footer-link'>
                <h5>contact@resfolio.com</h5>
                <h5>+444 3322 111 00</h5>
              </li>

            </ul>
          </div>

        </div>
        {/* -----------Footer-Bottom-Main---------- */}
        <div className='footer-bottom mt-4'>
          <h4 className='text-sm'>Designed by <a href="https://github.com/Muhammad-Ali-16" target='_blank' className='text-white font-josefin'>Ali Raza</a> 2025.</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
