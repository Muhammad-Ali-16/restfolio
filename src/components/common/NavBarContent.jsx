import { Link } from 'react-router-dom'

function NavBarContent({ AdditonalClass, Name, ClassToggle }) {

    const SubLinks = [
        { id: '1', url: 'about', text: 'About' },
        { id: '2', url: 'contact', text: 'Contact' },
        { id: '3', url: 'portfolio', text: 'Portfolio' },
        { id: '4', url: 'portfoliosingle', text: 'Portfolio Single' },
        { id: '5', url: 'faq', text: 'FAQ' },
        { id: '6', url: 'services', text: 'Services' },
        { id: '7', url: 'error', text: '404' },
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
                    relative w-56 bg-transparent opacity-100 transition-all duration-200 text-[var(--text-primary)] rounded-lg z-30 xl:absolute xl:bg-white xl:opacity-0 xl:text-black/70 xl:translate-y-8 xl:top-7 xl:-left-7 max-xl:group-hover:relative group-hover:translate-y-0 group-hover:opacity-100`}
                    >
                        <ul className="sublinks py-3 px-3 space-y-2">
                            {SubLinks.map((sublink) => (
                                <li className="sublink hover:text-[var(--text-secondary)] focus:text-[var(--text-secondary)]" key={sublink.id}><Link to={`/${sublink.url}`}>Page {sublink.text}</Link></li>
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
