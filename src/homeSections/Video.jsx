import { useState } from 'react'
import VideoUrl from '../assets/video.mp4'

function Video() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='video-section-main h-screen bg-[url(/video-bg.jpg)] bg-cover bg-no-repeat bg-center relative  before:content-[] before:bg-black/50 before:absolute before:inset-0 overflow-hidden'>
            <div className='video-content text-white relative z-2 flex justify-center items-center h-screen'>
                {/* -----------Video-Overlay---------- */}
                <button className='play-btn text-2xl border border-white rounded-full h-32 w-32 cursor-pointer' onClick={() => { setIsOpen(true) }}><i className="bi bi-play-fill"></i></button>
                <div className={`video-overlay bg-black/85 h-screen w-screen absolute inset-0 ${isOpen ? 'block' : 'hidden'}`}>
                    <button className='absolute top-5 right-10 cursor-pointer' onClick={() => { setIsOpen(false) }}><i className="bi bi-x-lg text-xl"></i></button>
                </div>
                {/* -----------Video---------- */}
                <div className={`video overflow-hidden absolute mx-2 rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
                    <video
                        src={VideoUrl}
                        className="w-full md:h-[70vh] h-auto object-cover"
                        controls
                        muted
                    />
                </div>
            </div>

        </section>
    )
}

export default Video