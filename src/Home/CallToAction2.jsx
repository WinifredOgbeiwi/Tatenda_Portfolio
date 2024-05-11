import React, { useEffect } from 'react'
import Button from '../utils/Button'
import Aos from 'aos';
import 'aos/dist/aos.css';
const CallToAction2 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className='bg-[#fcdcdb] py-10 flex flex-col items-center'>
            <h4 className='mb-5 font-bold text-3xl text-center'>Let's collaborate and elevate your product visuals</h4>
            <Button text="Let's talk" specific="nav_button_full" />
        </section>
    )
}

export default CallToAction2
