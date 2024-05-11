import React, { useEffect, useState } from 'react'
import { image } from '../data'
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const [showText, setShowText] = useState({
        mission: false,
        vision: false
    });
    return (
        <section id='about' className=' pt-20'>
            <div className=' flex flex-col md:flex-row justify-center items-center md:justify-between'>
                <img src={image.Person2} alt="" data-aos='fade-right' />
                <div className='md:w-1/2 mt-10 md:mt-0' data-aos='fade-left'>
                    <h2 className='text-[40px] leading-10 font-bold'>Elevating Your <br />Products Through <br />Realistic 3D Models</h2>
                    <p className='mt-5 mb-6'>I specialize in creating stunning visuals that showcase prodycts in their best light. My mission is to elevate your products through creative and engaging 3D solutions that exceed your expectation</p>
                    <h4 className="text-[#FA3C3A] font-semibold mt-10 mb-3 text-xl hover:underline cursor-pointer" onClick={() => setShowText({ ...showText, vision: !showText.vision })}>My Vision</h4>

                    {
                        showText.vision && <p className='mb-3'>To become a leading 3D artist by delivering innovative and high-quality 3D models that transform digital experiences and inspire creativity</p>
                    }

                    <hr />
                    <h4 className=' text-[#FA3C3A] font-semibold mt-10 mb-3 text-xl hover:underline cursor-pointer' onClick={() => setShowText({ ...showText, mission: !showText.mission })}>My Mission</h4>
                    {
                        showText.mission && <p className='mb-3'>To provide exceptional 3D modeling and product enhancement services that leverage cutting-edge software and techniques to create realistic and visually stunning models that exceed expectations</p>
                    }

                    <hr />
                </div>
            </div>

        </section>
    )
}

export default About
