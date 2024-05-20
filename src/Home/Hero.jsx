import React, { useEffect } from 'react'
import Aos from 'aos';
import { image } from '../data'
import 'aos/dist/aos.css';
const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <main className='h-full' data-aos='fade-down'>
            <div className="relative">
                <img src={image.ScrollDown} alt="" width="100px" className=" absolute right-0 top-7" />
            </div>

            <div className=" max-xl: h-full">
                <h1 className='text-center font-bold leading-snug  text-[2.2rem] md:text-8xl md:h-full flex flex-col md:justify-center items-center pt-40 md:pt-0'>Captivating <span className="text3d whitespace-nowrap">3D Models</span> & <span className="beating-text block w-full">Product Enhancement</span></h1>
            </div>
        </main>
    )
}

export default Hero
