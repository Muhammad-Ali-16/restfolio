import TeamImg1 from '../assets/team-1.jpg'
import TeamImg2 from '../assets/team-2.jpg'
import TeamImg3 from '../assets/team-3.jpg'
import TeamImg4 from '../assets/team-4.jpg'

function Teams() {

    const TeamCards = [
        { ImgUrl: TeamImg1, Name: 'Camila Sofia', About: 'Master Chef' },
        { ImgUrl: TeamImg2, Name: 'Mila Violet', About: 'Kitchen manager' },
        { ImgUrl: TeamImg3, Name: 'Gianna Aria', About: 'Executive chef' },
        { ImgUrl: TeamImg4, Name: 'Hazel Nora', About: 'General manager' }
    ]

    return (
        <section className='teams-main relative py-14 lg:py-20'>
            <div className='teams-content-main max-w-common px-2'>
                   {/* -----------Section-Main-Heading---------- */}
                <div className="teams-heading" data-aos="fade-in">
                    <h1 className="menu-heading text-3xl xl:text-5xl font-bold my-6 text-[var(--text-light)]">Our Team Members</h1>
                    <h4 className="menu-sub-heading max-w-2xl mb-10">Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.</h4>
                </div>
                <div className="team-content grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-2 gap-y-10" data-aos="fade-in" data-aos-delay="100">
                     {/* -----------Team-Members-Cards---------- */}
                    {TeamCards.map((cardContent, i) => (
                        <div className="member-card text-center relative group cursor-pointer" key={i}>
                            <div
                                className='relative overflow-hidden  flex flex-col justify-center items-center before:content-[] before:w-full before:h-[50%] transition-all duration-300 group-hover:before:opacity-100 group-focus:opacity-100 before:opacity-0 before:bg-linear-to-t before:from-[var(--color-dark)] before:to-transparent before:absolute before:bottom-0
                            '>
                                <img src={cardContent.ImgUrl} alt={`${cardContent.Name} Image`} className='max-w-[300px]' />
                                <div
                                    className="social-icons flex flex-row space-x-6 bg-[var(--color-dark)] bg-[url(/noise.png)] px-6 py-3 rounded-lg text-sm absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus:opacity-100 -bottom-16 group-hover:bottom-4 group-focus:bottom-4"
                                >
                                    <a href="/"><i className="bi bi-facebook"></i></a>
                                    <a href="/"><i className="bi bi-instagram"></i></a>
                                    <a href="/"><i className="bi bi-linkedin"></i></a>
                                    <a href="/"><i className="bi bi-youtube"></i></a>
                                </div>
                            </div>
                            <h3 className='member-name text-[var(--text-light)] font-bold text-lg md:text-2xl my-3'>{cardContent.Name}</h3>
                            <p className='member-discription'>{cardContent.About}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Teams
