import React from 'react'
import { image } from '../data'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
    return (
        <footer data-aos='fade-up'>
            <div className='flex flex-col md:flex-row  my-7 items-center md:justify-between justify-center text-center'>
                <div className='flex items-center'>
                    <a href=""><img src={image.Logo} alt="" className='w-10 mr-3' /></a>
                    <p className='font-semibold leading-4'>sakaz.designs
                    </p>
                </div>

                <div className='flex flex-row justify-center md:justify-start  space-x-4 mt-4 md:mt-0'>
                    <a href="https://www.facebook.com/tatenda.sakarombe22/" className='hover'><FaFacebookF /></a>
                    <a href="https://www.instagram.com/sakaz.designs/" className='hover'><FaInstagram /></a>
                    <a href="https://www.youtube.com/channel/UCSDSx2lKTlFwpcWfMB6KAqA" className='hover'><FaYoutube /></a>
                    <a href="https://www.linkedin.com/in/tatenda-sakarombe/" className='hover'><FaLinkedinIn /></a>

                </div>

            </div>
        </footer>
    )
}

export default Footer
