import React from 'react'
import Button from '../utils/Button'

const Contact = () => {
    return (
        <section
            id='contact' data-aos='fade-down'
            className='mt-20 mb-10'>
            <div className='w-[80%] m-auto mb-10'>
                <h2 className=' text-center text-5xl font-bold '>Contact</h2>
                <p className='my-5 text-center'>If you're interested in working together or have any question, feel free to reach out. I'm always open to a conversation to help clarify your needs and explore how my skills can bring your ideas to life</p>
            </div>

            <div className='flex justify-center items-center'>
                <form

                    action='https://getform.io/f/b0db5501-b350-4502-913b-fed76f9c5ccb'
                    method='POST'
                    className='flex flex-col w-full md:w-1/2'>
                    <input
                        type='text'
                        name='name'
                        required
                        placeholder='Name'
                        className='p-2 border-2 border-[#FA3C3A]  rounded focus:outline-none' />

                    <input
                        type='email'
                        name='email'
                        required
                        placeholder='Email'
                        className='p-2  border-2  border-[#FA3C3A] rounded focus:outline-none my-4' />

                    <textarea
                        name='message'
                        rows='6'
                        required
                        placeholder='Message'
                        className='p-2 border-2  border-[#FA3C3A] rounded focus:outline-none'></textarea>
                    <Button type='submit' text='Send' specific="nav_button_full contact_button" />

                </form>

            </div>


        </section>
    )
}

export default Contact