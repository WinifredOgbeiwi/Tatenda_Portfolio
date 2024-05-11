import React from 'react'
import { image } from '../data'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
    return (
        <footer >
            <div className='grid md:grid-cols-3 my-7 items-center md:justify-between justify-center text-center'>
                <div className='flex items-center'>
                     <img src={image.Logo} alt="" className='w-10 mr-3' />
                    <p className='font-semibold leading-4'>Tatenda Carl <span className=' md:block'>Sakarombe</span>
                     </p>
                </div>
               

                <ul className='flex flex-row justify-center md:justify-start space-x-3 mt-4 md:mt-0'>
                    <li> <a href="#pricing">Pricing</a> </li>
                    <li> <a href="#contact"></a> Contact</li>
                </ul>
                <div className='flex flex-row justify-center md:justify-start  space-x-4 mt-4 md:mt-0'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />

                </div>

            </div>
        </footer>
    )
}

export default Footer
