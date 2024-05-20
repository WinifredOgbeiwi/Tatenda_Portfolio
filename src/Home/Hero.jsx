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

            <div className="flex flex-col justify-center items-center h-[80%]">
                <h1 className='text-center font-bold leading-snug  text-[2.5rem] md:text-8xl flex flex-col md:justify-center items-center '>Captivating <span className="text3d whitespace-nowrap">3D Models</span> & <span className="beating-text block w-full">Product Enhancement</span></h1>
            </div>
        </main>
    )
}

export default Hero
