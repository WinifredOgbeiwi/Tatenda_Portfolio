import React, { useEffect } from 'react'
import { GrStatusGood } from "react-icons/gr";
import { partner } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Partner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='bg-[#fcdcdb] py-20'>
      <div className='w-[80%] m-auto mb-10'>
        <h2 className=' text-5xl font-bold text-center '>Your 3D Modeling Partner</h2>
        <p className='mt-5 mb-6 text-center '>As a 3D artist, I excel in creating photorealistic 3D models that accurately represent products and concepts. My experience in 3D modeling, texture and software proficiency, combined with my passion for creativity, enables me to elevate your product and bring your ideas to life. </p>
      </div>

      <div>
        <div className='grid md:grid-cols-2 gap-8'>
          {partner.map(({ title, id, description }, index) => (
            <div key={id} className='p-4 border-2 border-red-500' >
              <div className={`${index === 0 || index === partner.length - 1 ? 'bg-red-400 py-6 px-10' : ''} `}>
                <GrStatusGood className='text-black hover:text-white font-bold mb-3 text-2xl' />
                <h3 className=' text-3xl font-bold'>{title}</h3>
                <p className='my-6'>{description}</p>
               
              </div>
            </div>
          )

          )
          }
        </div>



      </div>
    </section>
  )
}

export default Partner
