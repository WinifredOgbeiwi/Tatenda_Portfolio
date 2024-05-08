import React from 'react'
import { image } from '../data'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer >
            <div className='flex flex-row items-center justify-between'>
                <div className='flex items-center'>
                     <img src={image.Logo} alt="" className='w-10' />
                     <p className='font-semibold leading-4'>Tatenda Carl <br/>Sakarombe</p>
                </div>
               

                <ul className='flex flex-row space-x-3'>
                    <li> <a href="#pricing">Pricing</a> </li>
                    <li> <a href="#contact"></a> Contact</li>
                </ul>
                <div className='flex flex-row space-x-4'>
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
