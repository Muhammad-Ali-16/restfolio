import ErrorImg from '../assets/404.png'

function PageError() {
    return (
        <section className='error-page-main bg-[url(/404_bg.png)]'>
            <div className="error-page-content flex justify-center items-center flex-col my-6">
                <img src={ErrorImg} alt="404 Img" loading='lazy'/>
                <div className='text-center space-y-4'>
                <h1 className='text-white text-2xl xl:text-3xl'><a href="/"><i class="text-[var(--text-secondary)] bi bi-arrow-up-right"></i> Go To Home Page</a></h1>
                    <h5>The page you are looking for was not found.</h5>
                </div>
            </div>
        </section>
    )
}

export default PageError