import { useState, useEffect, useRef } from 'react';
import RotatingIcon from '../sections/shared/RotatingIcon'
import Logo from '../assets/logoicon.svg';
import Icon1 from '../assets/services-icon-4.svg';
import Icon2 from '../assets/services-icon-2.svg';
import Icon3 from '../assets/services-icon-3.svg';
import ProductImg1 from '../assets/porfolio_1.jpg'
import ProductImg2 from '../assets/porfolio_2.jpg'
import ProductImg3 from '../assets/porfolio_3.jpg'
import PortfolioBanner from '../assets/single-portfolio-banner.png'
import PortfolioImg1 from '../assets/single-portfolio-img-1.jpg'
import FastFoodImg1 from '../assets/porfolio_2.jpg'
import FastFoodmg2 from '../assets/porfolio_3.jpg'
import DrinksImg1 from '../assets/portfolio-drinks-1.jpg'
import Drinksmg2 from '../assets/portfolio-drinks-2.jpg'
import RestaurantImg1 from '../assets/porfolio_1.jpg'
import Restaurantmg2 from '../assets/porfolio_5.jpg'
import IcecreamImg1 from '../assets/portfolio-icecream-1.jpg'
import Icecreammg2 from '../assets/portfolio-icecream-2.jpg'



function PagePortfolioSingle() {

    const [index, setIndex] = useState(0)
    const sectionRef = useRef(null);

    useEffect(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [index]);

    const PortfolioCards = [
        { imgUrl: ProductImg1, heading: 'French Fries Ketchup', discription: 'Recipes / Food' },
        { imgUrl: ProductImg2, heading: 'Tomato And Sauces', discription: 'Restaurant' },
        { imgUrl: ProductImg3, heading: 'French Fries', discription: 'Coffee / Food' },
    ]

    const PortfolioProducts = [
        {
            subHeading: 'Fast Food', Heading: 'Explore Our Fast Food Creations', ImgUrl1: FastFoodImg1, ImgUrl2: FastFoodmg2,
            Cards: [
                { ImgUrl: Icon1, Heading: 'Fresh Product', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
                { ImgUrl: Icon2, Heading: 'Skilled Chefs', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
                { ImgUrl: Icon3, Heading: 'Drinks', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
            ],
            Price: '99.95', MembershipPrice: '999.95', Date: '20 December, 2023', Category: 'Fast Food'
        },
        {
            subHeading: 'Drinks', Heading: 'Refreshing Drinks Collection', ImgUrl1: DrinksImg1, ImgUrl2: Drinksmg2,
            Cards: [
                { ImgUrl: Icon1, Heading: 'Fresh Product', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
                { ImgUrl: Icon2, Heading: 'Skilled Chefs', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
                { ImgUrl: Icon3, Heading: 'Drinks', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
            ],
            Price: '55.95', MembershipPrice: '550.95', Date: '28 June, 2020', Category: 'Dinks'
        },
        {
            subHeading: 'Restaurant', Heading: 'Signature Restaurant Dishes', ImgUrl1: RestaurantImg1, ImgUrl2: Restaurantmg2,
            Cards: [
                { ImgUrl: Icon1, Heading: 'Fresh Product', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
                { ImgUrl: Icon2, Heading: 'Skilled Chefs', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
                { ImgUrl: Icon3, Heading: 'Drinks', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
            ],
            Price: '199.95', MembershipPrice: '1999.95', Date: '19 August, 2025', Category: 'Fast Food'
        },
        {
            subHeading: 'Icecream', Heading: 'Sweet Ice Cream Delights', ImgUrl1: IcecreamImg1, ImgUrl2: Icecreammg2,
            Cards: [
                { ImgUrl: Icon1, Heading: 'Fresh Product', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
                { ImgUrl: Icon2, Heading: 'Skilled Chefs', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
                { ImgUrl: Icon3, Heading: 'Drinks', Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur id sint.' },
            ],
            Price: '40.95', MembershipPrice: '400.95', Date: '1 October, 2021', Category: 'Icecream'
        },
    ]


    return (
        <section className='page-portfolio-single-main mt-12'>
            <div className="page-portfolio-single-content-main max-w-common">
                {/* -----------Portfolio-Banner-Image---------- */}
                <img src={PortfolioImg1} alt="portfolio-banner" className='w-auto h-auto mx-auto rounded-3xl' />

                <div className="portfolio grid grid-rows-1 grid-cols-1 xl:grid-cols-3 my-12 gap-10" ref={sectionRef} >
                    {/* -----------Portfolio-Info---------- */}
                    <div className="portfolio-info xl:col-span-2">

                        <div className="portfolio-heading-main space-y-2">
                            <h6 className='text-sm'>{PortfolioProducts[index].subHeading}</h6>
                            <h3 className='text-white text-2xl md:text-3xl lg:text-5xl group-hover:text-[var(--text-secondary)] transition-all duration-100'>{PortfolioProducts[index].Heading}</h3>
                        </div>

                        <div className="product-discription my-8 leading-8">
                            <p>
                                Fusce eu eros nec felis venenatis fermentum sit amet eget turpis. Integer tempus massa actimulai arcu sollicitudin sollicitudin. Vivamus neque urna, iaculis et orci id, euismod tempor arcu semper girucongue nulla amet finibus. Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulusidm iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa. Quisque ut venenatis nunc, vitae rutrum libero. Duis eget consectetur urna. Ut utlimisse aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orbundilisci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulum iaculis nibh facilisis felsidlis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa. Quisque ut venenatis nunc, vitae rutrum libero. Duis eget consectetur urna. Ut ut aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orci varius natoque penatibus et magnis parturi montes, nascetur ridiculus mus. Nam eget nisl non elit tempor dignissim nec non sapien.
                            </p>
                        </div>

                        <div className="product-imgs my-8 grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                            <img src={PortfolioProducts[index].ImgUrl1} alt="portfolio-img" className='rounded-3xl' />
                            <img src={PortfolioProducts[index].ImgUrl2} alt="portfolio-img" className='rounded-3xl' />
                        </div>

                        <div className="portfolio-goals my-8 space-y-4">
                            <h3 className='text-white text-2xl md:text-4xl  group-hover:text-[var(--text-secondary)] transition-all duration-100'>Goals We can Provide.</h3>
                            <p className=' leading-8'>
                                Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulusidm iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa. Quisque ut venenatis nunc, vitae rutrum libero. Duis eget consectetur urna. Ut utlimisse aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orbundilisci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                            </p>
                            <h6 className='text-white'> <i className="bi bi-check-circle-fill mx-2 text-[var(--text-secondary)]"></i> One-time security check fee: ${PortfolioProducts[index].Price}</h6>
                            <h6 className='text-white'> <i className="bi bi-check-circle-fill mx-2 text-[var(--text-secondary)]"></i> Elite membership fee: ${PortfolioProducts[index].MembershipPrice} per month</h6>
                        </div>

                        <div className="product-tips my-8 space-y-4">
                            <h3 className='text-white text-2xl md:text-4xl  group-hover:text-[var(--text-secondary)] transition-all duration-100'>Tips & Tricks</h3>
                            <p className=' leading-8'>
                                Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulusidm iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa.
                            </p>
                            <div className='cards-main grid grid-rows-1 grid-cols-1 md:grid-cols-3'>
                                {PortfolioProducts[index].Cards.map((card, i) => (
                                    <div className="tips-card cursor-pointer" key={i}>
                                        <div className="card-content m-10 text-center">
                                            <img src={card.ImgUrl} alt="Card Icon" className="mx-auto max-w-[80px]" />
                                            <h3 className="card-heading text-[var(--text-light)] my-8 text-lg xl:text-2xl font-bold">{card.Heading}</h3>
                                            <p className='card-discription'>{card.Description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="porduct-history my-8 space-y-4">
                            <h3 className='text-white text-2xl md:text-4xl  group-hover:text-[var(--text-secondary)] transition-all duration-100'>History</h3>
                            <p className=' leading-8'>
                                Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulusidm iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa. Quisque ut venenatis nunc, vitae rutrum libero. Duis eget consectetur urna. Ut utlimisse aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orbundilisci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                            <i className='text-white font-semibold text-xl'> <span className='text-4xl text-[var(--text-secondary)] font-josefin'>"</span> Nullam sit amet sem metus. Nam nec metus eudia viverra nec nibh. Donec euismod malesuada, quis egestas eget. Vivmus quam erat slliitudin. <span className='text-4xl text-[var(--text-secondary)] font-josefin'>"</span></i>
                            <p className=' leading-8 my-4'>
                                Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulusidm iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa. Quisque ut venenatis nunc, vitae rutrum libero. Duis eget consectetur urna. Ut utlimisse aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orbundilisci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>


                        <div className="portfolio-btns flex flex-row justify-between my-6 py-6 border-y border-dashed border-white/30">
                            {/* -----------Prev-Btn---------- */}
                            <button
                                disabled={index === 0}
                                onClick={() => setIndex(index - 1)}
                                className={`prev-btn flex flex-row items-center space-x-2 md:space-x-4 text-white ${index === 0 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <i className="text-md md:text-xl px-5 py-1 rounded-full bg-white/10 bi bi-arrow-left"></i>
                                <h6 className="max-md:text-sm">Prev Product</h6>
                            </button>

                            {/* -----------Next-Btn---------- */}
                            <button
                                disabled={index === PortfolioProducts.length - 1}
                                onClick={() => setIndex(index + 1)}
                                className={`next-btn flex flex-row items-center space-x-2 md:space-x-4 text-white ${index === PortfolioProducts.length - 1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <h6 className="max-md:text-sm">Next Product</h6>
                                <i className="text-md md:text-xl px-5 py-1 rounded-full bg-white/10 bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    {/* -----------Portfolio-Contact---------- */}
                    <div className="porfolio-contact-main space-y-10">

                        {/* -----------Portfolio-Contact-Info---------- */}
                        <div className="contact-info-main bg-[#0004] rounded-2xl">
                            <div className="p-8 space-y-5">
                                <div className="portfolio-contact-item space-y-2">
                                    <h3 className='text-white text-xl'>Date:</h3>
                                    <h6 className='text-sm'>{PortfolioProducts[index].Date}</h6>
                                </div>
                                <div className="portfolio-contact-item space-y-2">
                                    <h3 className='text-white text-xl'>Category:</h3>
                                    <h6 className='text-sm'>{PortfolioProducts[index].Category}</h6>
                                </div>
                                <div className="portfolio-contact-item space-y-2">
                                    <h3 className='text-white text-xl'>Client:</h3>
                                    <a href="?"><h6 className='text-sm'>www.restfolio.com</h6></a>
                                </div>
                                <div className="portfolio-contact-item space-y-2">
                                    <h3 className='text-white text-xl'>Social Media:</h3>
                                    <div className="text-sm space-x-3">
                                        <a href='?'><i className="bi bi-instagram"></i></a>
                                        <a href='?'><i className="bi bi-facebook"></i></a>
                                        <a href='?'><i className="bi bi-twitter-x"></i></a>
                                        <a href='?'><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* -----------Portfolio-Banner---------- */}
                        <div className="image-banner">
                            <img src={PortfolioBanner} alt="portfolio-banner" className='mx-auto' />
                        </div>
                    </div>
                </div>

                {/* -----------Related-Products-Main---------- */}
                <div className="related-products-main">
                    <div className="related-products-heading text-center flex items-center flex-col">
                        <img src={Logo} alt="Logo" />
                        <h1 className="related-products-heading text-3xl xl:text-5xl font-bold my-6 text-[var(--text-light)]">
                            Our Related Products
                        </h1>
                        <h4 className="related-products-sub-heading max-w-2xl mb-10">
                            Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices.
                            Vestibulum ante ipsum primis in faucibus orci luctus.
                        </h4>
                    </div>

                    <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-12'>
                        {PortfolioCards.map((card, i) => (
                            <div key={i} className='portfolio-card text-center flex flex-col items-center group'>
                                <a href='?'>
                                    <div className='card-img relative'>
                                        <img src={card.imgUrl} alt={`${card.heading} Image`} loading='lazy' className='xl:max-w-[380px] md:max-w-[350px] object-cover rounded-3xl' />
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

            </div>
            <RotatingIcon />
        </section>
    )
}

export default PagePortfolioSingle