function TopBar() {
  return (
    <div className='topbar-main relative py-4 border-b border-[#fff3] w-full'>
      <div className="topbar-content flex flex-row justify-between items-center max-w-[96vw] lg:max-w-[96vw] mx-auto">
        <p className={`hidden lg:inline-block font-semibold text-lg tracking-wider relative  topbar-icon`}>Welcome to our restfolio restaurant</p>
        <img src="/logo.svg" alt="restfolio logo" className='w-[80px] h-[50px] lg:w-[120px]' />
        <div className="social-icons flex flex-row space-x-6 text-lg">
          <a href='/'> <div className="bi bi-instagram"></div></a>
          <a href='/'> <div className="bi bi-facebook"></div></a>
          <a href='/'> <div className="bi bi-twitter-x"></div></a>
          <a href='/'> <div className="bi bi-linkedin"></div></a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
