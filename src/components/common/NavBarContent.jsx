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
            <li className={`${Name}-link relative transition duration-200 group`}>
                <Link className="cursor-pointer group-hover:text-[var(--text-secondary)]">
                    Pages <i className="bi bi-chevron-down"></i>
                </Link>
                {/* -----------Nav-SubLinks----------  */}
                <div
                    className={`${AdditonalClass} 
                    xl:absolute left-0 top-full min-w-[200px] xl:bg-white bg-transparent xl:text-black/75 text-[var(--text-primary)] rounded-lg transition-all duration-150 xl:invisible xl:opacity-0 group-hover:visible group-hover:opacity-100 relative`}
                >
                    <ul className="sublinks py-3 px-3 space-y-2">
                        {SubLinks.map((sublink, i) => (
                            <li className="sublink hover:text-[var(--text-secondary)] focus:text-[var(--text-secondary)]" key={i}><Link to={`/${sublink.url}`}>Page {sublink.text}</Link></li>
                        ))}

                    </ul>
                </div>
            </li>

            <li className={`${Name}-link hover:text-[var(--text-secondary)] transition duration-200`}><Link to='/privacy_policy'>Documentation</Link></li>
        </ul >
    )
}

export default NavBarContent
