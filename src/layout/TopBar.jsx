function TopBar() {

  const SocialIcons = [
    { id: '1', class: 'instagram', link: '/' },
    { id: '2', class: 'facebook', link: '/' },
    { id: '3', class: 'twitter-x', link: '/' },
    { id: '4', class: 'linkedin', link: '/' },

  ]

  return (
    <div className='topbar-main relative py-4 border-b border-[#fff3] w-full'>
      <div className="topbar-content flex flex-row justify-between items-center max-w-common">
        <p className={`hidden lg:inline-block font-semibold text-sm tracking-wider relative  topbar-icon`}>Welcome to our restfolio restaurant</p>
        <img src="/logo.svg" alt="restfolio logo" className='w-[120px]' />
        <div className="social-icons flex flex-row space-x-3 lg:space-x-6 text-sm lg:text-md">
          {SocialIcons.map((icon) => (
            <a href={icon.link} key={icon.id}><div className={`opacity-40 hover:opacity-100 transition-all duration-300 bi bi-${icon.class}`}></div></a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar
