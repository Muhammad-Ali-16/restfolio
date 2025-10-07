import { Link } from 'react-router-dom'

function PagesHeader({ title }) {
    return (
        <header className='bg-[url(/pages-header-bg.jpg)] bg-cover bg-center bg-no-repeat py-[130px] lg:py-[150px] relative z-1'>
            <div className='flex flex-col justify-center items-center'>
                   <h1 className="pages-header-title text-3xl xl:text-5xl my-6 text-[var(--text-light)]">{title}</h1>
                <h4 className='pages-header-navigation cursor-pointer'><Link to='/' className='font-josefin text-[var(--text-secondary)]'>Home /</Link> {title}</h4>
            </div>
        </header>
    )
}

export default PagesHeader