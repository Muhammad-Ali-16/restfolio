
function Reservation() {
    return (
        <section className="reservation-main w-full relative h-auto py-12 xl:py-16 overflow-hidden">
            <div className="reservation-content-main max-w-7xl mx-auto">
                <div
                    className=" mx-3 bg-[var(--form-bg)] grid grid-cols-1 gap-10 h-auto rounded-3xl relative
        bg-[url(/reservation-pattern.png)] bg-no-repeat bg-contain bg-center before:content-[''] before:absolute before:bg-[url(/reservation-img.png)] before:inset-0 before:bg-no-repeat before:bg-cover"
                    data-aos="fade-in"
                >
                    <div className="mx-auto text-center my-8 space-y-8 relative z-10">
                        <h1 className="text-5xl font-semibold text-[var(--text-light)]" >
                            Make a Reservation
                        </h1>
                        <p className="text-[var(--text-primary)]">
                            Get in touch with restaurant
                        </p>

                        <form className="w-auto mx-4 relative">
                            <div className="space-y-12">
                                <div className="mt-10 grid grid-rows-1 grid-cols-4 gap-x-6 gap-y-8 mx-6">
                                    <div className="col-span-full md:col-span-2">
                                        <div className="mt-1">
                                            <input
                                                required
                                                placeholder="Full Name"
                                                id="name"
                                                type="text"
                                                name="name"
                                                autoComplete="name"
                                                className="font-josefin block w-full rounded-md bg-[var(--form-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full md:col-span-2">
                                        <div className="mt-1">
                                            <input
                                                required
                                                placeholder="Your Contact"
                                                id="phone-input"
                                                type="tel"
                                                name="phone"
                                                autoComplete="tel"
                                                className="font-josefin block w-full rounded-md bg-[var(--form-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full md:col-span-1">
                                        <div className="mt-1">
                                            <input
                                                required
                                                id="date"
                                                type="date"
                                                name="date"
                                                className="font-josefin block w-full rounded-md bg-[var(--form-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full md:col-span-2">
                                        <div className="mt-1">
                                            <input
                                                required
                                                id="time"
                                                type="time"
                                                name="time"
                                                className="font-josefin block w-full rounded-md bg-[var(--form-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full md:col-span-1">
                                        <div className="grid focus-within:relative">
                                            <select
                                                id="person"
                                                name="person"
                                                className="font-josefin col-start-1 row-start-1 w-full appearance-none rounded-md bg-[var(--form-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6"
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
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
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
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-x-6 mx-6">
                                <button
                                    type="submit"
                                    className={`reservation-btn bg-[var(--text-secondary)] text-[var(--text-light)] mt-6 cursor-pointer h-[55px] w-[150px] xl:w-[160px] rounded-full text-sm lg:text-md tracking-wider transition duration-200 hover:-translate-y-0.5`}>
                                    <h3>Book A Table +</h3>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reservation;
