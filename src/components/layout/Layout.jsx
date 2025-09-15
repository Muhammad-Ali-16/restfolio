import { Outlet, useLocation } from 'react-router-dom'
import TopBar from '../layout/TopBar'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import { useEffect, useState } from 'react'

function Layout() {

    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()

    // useEffect(() => {
    //     setIsLoading(true)
    //     const timer = setTimeout(() => {
    //         setIsLoading(false)
    //     }, 2000)
    //     return () => { clearTimeout(timer) }
    // }, [location.pathname])

    return (
        <>
            {/* <!----------Pre-Loader----------!> */}
            <div
                className={`pre-loader bg-linear-to-r from-[#111111]  via-[#333333] via-60% to-[#5e5e5e]  absolute w-[100vw] z-50 flex flex-col justify-center items-center ${isLoading ? 'h-[100vh]' : 'h-0 -translate-y-14 transition-height duration-400'}`}>
                <img src="/logo.svg" alt="logo" />
                <div className='my-4 text-xl sm:text-2xl tracking-[1rem] text-[#b5b5b5]'>
                    <span className='loading-animation'>R</span>
                    <span className='loading-animation'>E</span>
                    <span className='loading-animation'>S</span>
                    <span className='loading-animation'>T</span>
                    <span className='loading-animation'>F</span>
                    <span className='loading-animation'>O</span>
                    <span className='loading-animation'>L</span>
                    <span className='loading-animation'>I</span>
                    <span className='loading-animation'>O</span>
                </div>
            </div>
            {/* <!----------Header----------!> */}
            <header className='w-full'>
                <div className='max-w-[96vw] lg:max-w-[96vw] mx-auto'>
                    <TopBar />
                    <NavBar />
                </div>
            </header>
            {/* <!----------Main-Content----------!> */}
            <main>
                <Outlet />
            </main>
            {/* <!----------Footer----------!> */}
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout
