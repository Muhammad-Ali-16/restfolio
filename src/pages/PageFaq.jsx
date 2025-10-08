import { useState, useRef, useEffect } from "react";
import PageServices from "../sections/shared/PageServices";
import SocialMedia from "../sections/home/SocialMedia";
import RotatingIcon from "../sections/shared/RotatingIcon";
import faqImg1 from "../assets/faq-1.jpg";


function AccordionItem({ title, content, isOpen, onClick }) {
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className="border-b border-dashed border-white/30  bg-transparent">
            <button
                className="w-full flex justify-between items-center py-3 text-left font-oswald text-[var(--text-light)] m-2 cursor-pointer"
                onClick={onClick}
            >
                {title}
                <i className={`mr-8 text-xl text-white/50 bi bi-chevron-up transition-all duration-350 ${isOpen ? "rotate-0" : "rotate-180"}`}></i>
            </button>

            <div
                ref={contentRef}
                style={{ maxHeight: height }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <h6 className="p-3 text-[var(--text-primary)]">{content}</h6>
            </div>
        </div>
    );
}

export default function PageFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            title: "How many cakes do you schedule to make on the same day?",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime...",
        },
        {
            title: "How many wedding cakes have you made before?",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime...",
        },
        {
            title: "Do you work with fondant or buttercream icing?",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime...",
        },
        {
            title: "When is the final instalment of payment due?",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime...",
        },
    ];

    return (
        <section className="page-faq-main relative mt-12 lg:mt-17">
            <div className="page-faq-content relative">

                <section className="faq-main py-12 mx-3 relative before:content-[] before:bg-[url(/faq-pattern.png)] before:absolute before:inset-0 before:bg-no-repeat before:bg-center ">
                    <div className="faq-content-main max-w-7xl mx-auto grid grid-rows-1 grid-cols-1 xl:grid-cols-2 gap-10">

                        <div className="accordion-main">
                            {/* -----------FAQs-Main-Heading---------- */}
                            <div className="faq-heading-main text-[var(--text-light)] font-semibold mt-6 xl:mt-10 mb-8 max-w-xl">
                                <h1 className='text-4xl xl:text-5xl leading-13' data-aos="fade-in" >Our best Frequency and questions provide.</h1>
                            </div>
                            <h4 className="faq-sub-heading max-w-xl " data-aos='fade-in'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi sem, tristique vel blandit sed, varius id tellus. Pellentesque pretium bibendum velit, at interdum libero cursus sit amet. Fusce ac faucibus elit.
                            </h4>

                            {/* -----------Accordion---------- */}
                            <div className="accordion bg-[var(--primary-background)] text-[var(--text-primary)] pt-10 pb-8" data-aos='fade-in'>
                                <div className="max-w-7xl">
                                    {data.map((item, index) => (
                                        <AccordionItem
                                            key={index}
                                            title={item.title}
                                            content={item.content}
                                            isOpen={openIndex === index}
                                            onClick={() => toggleAccordion(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* -----------FAQs-Image---------- */}
                        <div className="faq-img relative before:content-[] before:absolute before:h-[90%] before:w-[90%] before:-left-15 before:-bottom-15 before:bg-[var(--color-brown)] before:opacity-5 before:-z-1">
                            <img src={faqImg1} alt="faq-image" className="w-auto px-6" />
                        </div>
                    </div>
                </section>

                {/* -----------Social-Media-Images---------- */}
                <section className="reservation-main w-full bg-[#0004] relative my-18">
                    <div className="reservation-content-main max-w-common bg-[url(/faq-reservation.png)] bg-no-repeat bg-[30px_30px]">
                        <div className="mx-3 grid grid-cols-1 gap-10 h-auto rounded-3xl relative py-10">
                            <div className="mx-auto text-center my-8 space-y-8 relative z-10">
                                <h1 className="text-5xl font-semibold text-[var(--text-light)]">
                                    Make a Reservation
                                </h1>
                                <p className="text-[var(--text-primary)]">
                                    Get in touch with restaurant
                                </p>

                                <form className="w-auto mx-4 relative">
                                    <div className="space-y-12">
                                        <div className="mt-10 grid grid-rows-1 grid-cols-4 gap-x-6 gap-y-8 mx-6">
                                            <div className="col-span-full md:col-span-2">
                                                <input
                                                    required
                                                    placeholder="Full Name"
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    className="font-josefin block w-full bg-transparent px-3 border-b border-dashed border-white/30 py-4 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-primary)] focus:bg-[var(--form-bg)] sm:text-sm/6"
                                                />
                                            </div>

                                            <div className="col-span-full md:col-span-2">
                                                <input
                                                    required
                                                    placeholder="Your Contact"
                                                    id="phone-input"
                                                    type="tel"
                                                    name="phone"
                                                    className="font-josefin block w-full bg-transparent px-3 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-primary)] outline-none border-b border-dashed border-white/30 focus:bg-[var(--form-bg)] sm:text-sm/6"
                                                />
                                            </div>

                                            <div className="col-span-full md:col-span-1">
                                                <input
                                                    required
                                                    id="date"
                                                    type="date"
                                                    name="date"
                                                    className="font-josefin block w-full bg-transparent px-3 py-4 text-[var(--text-primary)] outline-none border-b border-dashed border-white/30 focus:bg-[var(--form-bg)] sm:text-sm/6"
                                                />
                                            </div>

                                            <div className="col-span-full md:col-span-2">
                                                <input
                                                    required
                                                    id="time"
                                                    type="time"
                                                    name="time"
                                                    className="font-josefin block w-full bg-transparent px-3 py-4 text-[var(--text-primary)] outline-none border-b border-dashed border-white/30 focus:bg-[var(--form-bg)] sm:text-sm/6"
                                                />
                                            </div>

                                            <div className="col-span-full md:col-span-1 relative">
                                                <select
                                                    id="person"
                                                    name="person"
                                                    className="font-josefin w-full appearance-none bg-transparent px-3 py-4 text-[var(--text-primary)] focus:bg-[var(--form-bg)] outline-none border-b border-dashed border-white/30 sm:text-sm/6"
                                                >
                                                    <option>1 Person</option>
                                                    <option>2 Persons</option>
                                                    <option>3 Persons</option>
                                                    <option>4 Persons</option>
                                                    <option>5 Persons</option>
                                                </select>
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"
                                                >
                                                    <path
                                                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-center gap-x-6 mx-6">
                                        <button
                                            type="submit"
                                            className="reservation-btn bg-[var(--text-secondary)] text-[var(--text-light)] mt-6 cursor-pointer h-[55px] w-[150px] xl:w-[160px] rounded-full text-sm lg:text-md tracking-wider transition duration-200 hover:-translate-y-0.5"
                                        >
                                            <h3>Book A Table +</h3>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <PageServices />
                <SocialMedia />
                <RotatingIcon />
            </div>
        </section>
    );
}
