import React, { useEffect } from 'react'
import { experience } from '../data'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Portfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section id='projects' className=' pt-20'>
            <div className='flex flex-col md:flex-row items-center mb-20'>
                <h2 className=' md:w-1/2 text-5xl font-bold' data-aos='fade-right'>Expertise in 3D Modeling Texturing and Software Proficiency</h2>
                <p className='md:w-1/2 mt-5 md:mt-0' data-aos='fade-left'>My expereince in 3D modeling, texturing and software proficiency has honed my skills to create photorealistic, captivating 3D models.
                    I am proficient in industry-standard software like Blender, which enables me to produce high-quality models that look and feel realistic
                </p>
            </div>




            <div className='grid md:grid-cols-3 gap-8' data-aos='fade-up'>
                {
                    experience.map(({ id, date, title, description }) => (
                        <div key={id} className=' bg-[#fcdcdb] px-6 pt-6 pb-20'>
                            <p className='text-[#FA3C3A] font-semibold mt-4'>{date}</p>
                            <h4 className=' font-bold text-2xl my-4'>{title}</h4>
                            <p>{description}</p>
                            <p className=' font-semibold mt-4 underline' >Read More</p>
                        </div>
                    ))
                }

            </div>

            <div className=' my-20 grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='bar'>
                    <div className='info'>
                        <span className=' font-medium'>3D Modeling</span>
                    </div>
                    <div className='progress-bar w-full h-2 bg-slate-200 rounded-lg relative overflow-hidden'>
                        <span className='absolute h-full rounded-lg w-[45%] bg-[#FA3C3A]'></span>
                    </div>
                </div>

                <div className='bar'>
                    <div className='info'>
                        <span className=' font-medium'>Software Proficiency</span>
                    </div>
                    <div className='progress-bar w-full h-2 bg-slate-200 rounded-lg relative overflow-hidden'>
                        <span className='absolute h-full rounded-lg w-[82%] bg-[#FA3C3A]'></span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span className=' font-medium'>Texturing</span>
                    </div>
                    <div className='progress-bar w-full h-2 bg-slate-200 rounded-lg relative overflow-hidden'>
                        <span className='absolute h-full rounded-lg w-[70%] bg-[#FA3C3A]'></span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='info'>
                        <span className=' font-medium'>Lighting</span>
                    </div>
                    <div className='progress-bar w-full h-2 bg-slate-200 rounded-lg relative overflow-hidden'>
                        <span className='absolute h-full rounded-lg w-[90%] bg-[#FA3C3A]'></span>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Portfolio
