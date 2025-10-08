import React from 'react'

function RotatingIcon() {
    return (
        <div className="rotating-icon mt-32 flex justify-center items-center relative">

            <div className="h-[120px] w-[120px] md:h-[170px] md:w-[170px] lg:h-[200px] lg:w-[200px] bg-[#2B2724] rounded-full flex items-center justify-center relative z-2 translate-y-[-50%]">

                <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 animate-spin-slow"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="circlePath"
                        d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                        fill="none"
                    />
                    <text fontSize="14" fill="#d12d2d">
                        <textPath
                            href="#circlePath"
                            startOffset="50%"
                            textAnchor="middle"
                            className="uppercase tracking-[7px]"
                        >
                            backery food corner restfolio •
                        </textPath>
                    </text>
                </svg>

                <span className="text-white relative z-10 text-sm font-medium">
                    <img
                        src="/contact_rotate_icon.svg"
                        alt="icon"
                        className="w-[55px] md:w-[65px] lg:w-[80px]"
                    />
                </span>
            </div>
        </div>
    )
}

export default RotatingIcon