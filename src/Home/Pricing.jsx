import React from 'react'
import { pricing } from '../data'
import Button from '../utils/Button'

const Pricing = () => {
    return (
        <section id='pricing' className=' pt-20'>
            <div className='w-[80%] m-auto mb-10'>
                <h2 className=' text-5xl font-bold text-center '>Pricing Package</h2>
                <p className='mt-5 mb-6 text-center '>My pricing packages are tailored to your specific project requirements. Whether its a one-time project or ongoing collaboration, my flexible pricing models provide value and efficiency</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {pricing.map(({ id, title, description, price }, index) => (
                        <div key={id} className={`flex flex-col justify-center items-center text-center  py-12 ${index === 1 ? "bg-[#FA3C3A]" : "bg-[#fcdcdb]"}`}>
                            <h3 className={`md:w-1/2 font-bold text-3xl leading-10 ${index===1?"text-white" : ""}`}>{title}</h3>
                            <p className={`font-bold mt-3 ${index === 1 ? "text-white" : ""}`}>{description}</p>
                            <div className={`my-10 h-[2px] w-1/2  ${index === 1 ? "bg-white" : "bg-black"}`}></div>
                            <h2 className={`font-bold text-5xl ${index === 1 ? "text-white" : ""}`}>{price}</h2>
                            <p className={`my-5 ${index === 1 ? "text-white" : ""}`}>Per Project</p>
                            {index === 1 ?  
                                <Button text="Get Started"
                                    specific="price_button_full" />: <Button text="Get Started" 
                            specific="nav_button_full" />}
                           
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
