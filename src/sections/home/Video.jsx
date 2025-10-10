import { useState } from 'react'
import VideoUrl from '../../assets/video.mp4'

function Video() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='video-section-main h-screen bg-[url(/video-bg.jpg)] bg-cover bg-no-repeat bg-center relative  before:content-[] before:bg-black/50 before:absolute before:inset-0 overflow-hidden'>
            <div className='video-content text-white relative z-2 flex justify-center items-center h-screen'>
                {/* -----------Video-Overlay---------- */}
                <button className='play-btn text-2xl border border-white rounded-full h-32 w-32 cursor-pointer' onClick={() => { setIsOpen(true) }}><i className="bi bi-play-fill"></i></button>
                {isOpen && (
                    <div className='video-overlay bg-black/75 backdrop-blur-xs h-[100vh] w-full fixed z-50 inset-0 flex justify-center items-center'>
                        <button
                            className='absolute top-5 right-10 cursor-pointer text-white text-2xl'
                            onClick={() => setIsOpen(false)}
                        >
                            <i className='bi bi-x-lg'></i>
                        </button>

                        <video
                            src={VideoUrl}
                            className='w-[90%] md:w-[70%] lg:w-[60%] rounded-lg'
                            controls
                        />
                    </div>
                )}
            </div>

        </section>
    )
}

export default Video