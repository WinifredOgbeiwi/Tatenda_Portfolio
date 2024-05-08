import React from 'react'
import { image } from '../data'

const Hero = () => {
    return (
        <main className='text-4xl text-center font-bold'>
            <h1>Captivating 3D Models and Product Enhancement</h1>
            <div>
                <img src={image.Person} alt="person" className='m-auto' />
            </div>
        </main>
    )
}

export default Hero
