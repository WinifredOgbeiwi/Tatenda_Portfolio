import React, { useEffect } from 'react'
import { image } from '../data'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <main className='text-4xl text-center font-bold' data-aos='fade-down'>
            <h1 className='mx-2'>Captivating 3D Models and Product Enhancement</h1>
            <div>
                <img src={image.Person} alt="person" className='m-auto' />
            </div>
        </main>
    )
}

export default Hero
