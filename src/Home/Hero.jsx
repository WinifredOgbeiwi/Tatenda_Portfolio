import React, { useEffect } from 'react'
import Aos from 'aos';
import { image } from '../data'
import 'aos/dist/aos.css';
const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <main className='pt-10 h-screen' data-aos='fade-down'>
         
            <div className="">
                <img src={image.ScrollDown} alt="" width="100px" className=" float-end" />
            </div>

            <h1 className='pt-20  text-center font-bold leading-relaxed md:leading-snug text-3xl min-[350px]:text-5xl md:text-8xl'>Captivating <span className="text3d whitespace-nowrap">3D Models</span> & <span className="beating-text block w-full">Product Enhancement</span></h1>
        
        </main>
    )
}

export default Hero
