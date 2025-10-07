import { Link } from 'react-router-dom'

function NavBarContent({ AdditonalClass, Name, ClassToggle }) {

    const SubLinks = [
        { url: 'about', text: 'About' },
        { url: 'contact', text: 'Contact' },
        { url: 'faq', text: 'FAQ' },
        { url: 'portfolio', text: 'Portfolio' },
        { url: 'portfoliosingle', text: 'Portfolio Single' },
        { url: 'services', text: 'Services' },
        { url: 'error', text: '404' },
    ]

    return (
        <ul className={`${Name}-links ${AdditonalClass} ${ClassToggle} flex-col xl:flex-row space-x-7 mx-auto relative transition-all duration-600`}>
            {/* -----------Nav-Links---------- */}
            <li className={`${Name}-link hover:text-[var(--text-secondary)] transition duration-200`}><Link to='/'>Home</Link></li>
            <li className={`${Name}-link relative transition duration-200`}>
                <div className="inline-block group">
                    <Link className="cursor-pointer group-hover:text-[var(--text-secondary)]">
                        Pages <i className="bi bi-chevron-down"></i>
                    </Link>
                    {/* -----------Nav-SubLinks----------  */}
                    <div
                        className={`${AdditonalClass} 
                    relative w-56 bg-transparent opacity-100 transition-all duration-200 text-[var(--text-primary)] rounded-lg xl:absolute xl:bg-white xl:opacity-0 xl:text-black/70 xl:translate-y-8 xl:top-7 xl:-left-7 max-xl:group-hover:relative xl:-z-10- group-hover:translate-y-0 group-hover:opacity-100`}
                    >
                        <ul className="sublinks py-3 px-3 space-y-2">
                            {SubLinks.map((sublink, i) => (
                                <li className="sublink hover:text-[var(--text-secondary)] focus:text-[var(--text-secondary)]" key={i}><Link to={`/${sublink.url}`}>Page {sublink.text}</Link></li>
                            ))}

                        </ul>
                    </div>
                </div>
            </li>

            <li className={`${Name}-link hover:text-[var(--text-secondary)] transition duration-200`}><Link to='/doucmentation'>Documentation</Link></li>
        </ul >
    )
}

export default NavBarContent
