import { useState } from 'react'
import Button from '../common/Button'
import NavBarContent from '../common/NavBarContent'

function NavBar() {

  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <nav className='navbar-main w-full py-5 relative'>
      {/* -----------NavBar---------- */}
      <div className='navbar-content max-w-common flex flex-row justify-between items-center '>
        <div className="logo flex flex-row space-x-3 items-center cursor-pointer">
          <h4 className='text-md hover:text-[var(--text-secondary)] transition duration-200'>Menu</h4>
          <div className='space-y-2'>
            <span className='h-[1px] w-[50px] bg-white block'></span>
            <span className='h-[1px] w-[50px] bg-white block'></span>
          </div>
        </div>
        <NavBarContent Name='nav' AdditonalClass='hidden xl:flex' />
        <Button Name={'nav-button'} Link={'contact'} AdditonalClass='hidden xl:block bg-[var(--text-secondary)] text-[var(--text-light)]' Text={'Book A Table +'} />
        {/* -----------Toggle-Icon---------- */}
        <div className='toggler blcok xl:hidden cursor-pointer' onClick={() => { setIsOverlayOpen(!isOverlayOpen) }}>
          <i className={`bi bi-${isOverlayOpen ? 'x-lg' : 'list'} text-3xl`}></i>
        </div>
      </div>
      {/* -----------OverlayBar---------- */}
      <div className="overlaybar-content mx-2">
        <NavBarContent Name={'overlay'} AdditonalClass='flex xl:hidden' ClassToggle={isOverlayOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} />
      </div>

    </nav>
  )
}

export default NavBar
