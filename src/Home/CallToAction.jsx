import React, { useEffect } from 'react'
import { image } from '../data'
import Button from '../utils/Button'
import { FaCheck } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';
const CallToAction = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className='pt-20'>
            <div className='flex flex-col md:flex-row items-center mb-20 justify-between'>
                <img src={image.Person2} alt="" />
                <div className='md:w-1/2'>
                    <div className=' bg-[#FA3C3A] p-12 text-white'>
                        <h2 className=' text-5xl font-bold mb-6'>Let's Work Together</h2>
                        <p className='my-5'>If you're interested in working together or have any question, feel free to reach out. I'm always open to a conversation to help clarify your needs and explore how my skills can bring your ideas to life</p>
                        <div ><FaCheck className='inline mr-3'/>Get insights into the latest design trends and techniques</div>
                        <div className='my-2'><FaCheck className='inline mr-3' />Uderstand how my skills can complement your vision</div>
                        <div><FaCheck className='inline mr-3' />Explore customised design options for your needs</div>
                    </div>
                    <div className='flex justify-center mt-10'>
                           <Button text={"Let's Talk"} specific="nav_button_full" />
                    </div>
                 
                </div>
            </div>

        </section>
    )
}

export default CallToAction
