import RotatingIcon from '../sections/shared/RotatingIcon'
import PorfolioImg1 from '../assets/porfolio_1.jpg'
import PorfolioImg2 from '../assets/porfolio_2.jpg'
import PorfolioImg3 from '../assets/porfolio_3.jpg'
import PorfolioImg4 from '../assets/porfolio_4.jpg'
import PorfolioImg5 from '../assets/porfolio_5.jpg'
import PorfolioImg6 from '../assets/porfolio_6.jpg'
import PorfolioImg7 from '../assets/porfolio_7.jpg'
import PorfolioImg8 from '../assets/porfolio_8.jpg'
import PorfolioImg9 from '../assets/porfolio_9.jpg'

function PagePortfolio() {

    const PortfolioCards = [
        { imgUrl: PorfolioImg1, heading: 'French Fries Ketchup', discription: 'Recipes / Food' },
        { imgUrl: PorfolioImg2, heading: 'Tomato And Sauces', discription: 'Restaurant' },
        { imgUrl: PorfolioImg3, heading: 'French Fries', discription: 'Coffee / Food' },
        { imgUrl: PorfolioImg4, heading: 'Steak Sandwich', discription: 'Coffee / Food' },
        { imgUrl: PorfolioImg5, heading: 'Noodles Fried Vegetables', discription: 'Recipes / Food' },
        { imgUrl: PorfolioImg6, heading: 'French Fries Ketchup', discription: 'Restaurant' },
        { imgUrl: PorfolioImg7, heading: 'Falafel And Fresh Salad', discription: 'Restaurant' },
        { imgUrl: PorfolioImg8, heading: 'Beef And Vegetables', discription: 'Coffee / Food' },
        { imgUrl: PorfolioImg9, heading: 'Lettuce And Tomato', discription: 'Recipes / Food' },
    ]

    return (
        <section className='page-portfolio-main relative pt-14 mx-2'>
            <div className="page-portfolio-content-main max-w-common">
                <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-12'>
                    {PortfolioCards.map((card, i) => (
                        <div key={i} className='portfolio-card text-center flex flex-col items-center group'>
                            <a href='?'>
                                <div className='card-img relative'>
                                    <img src={card.imgUrl} alt={`${card.heading} Image`} className='xl:max-w-[380px] md:max-w-[350px] object-cover rounded-3xl' />
                                    <div className="overlay bg-black/0 absolute inset-0 rounded-3xl group-hover:bg-black/65 transition-all duration-100"></div>
                                </div>
                                <div className='card-content my-5 space-y-2'>
                                    <h3 className='text-white text-2xl lg:text-3xl group-hover:text-[var(--text-secondary)] transition-all duration-100'>{card.heading}</h3>
                                    <h6 className='text-sm'>{card.discription}</h6>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <RotatingIcon />
        </section>
    )
}

export default PagePortfolio