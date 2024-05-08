import React, { useEffect, useState } from 'react'
import { MOBILE_WINDOW_SIZE, image, navbar } from '../data'
import Button from '../utils/Button'
import { FaTimes } from 'react-icons/fa'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [shownav, setShowNav] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className='mb-7 md:mb-0'>
            <nav className='flex relative flex-row justify-between items-center px-12 py-5  bg-white md:bg-inherit'>
                <img src={image.Logo} alt="logo" className='w-16' />
                {windowWidth > MOBILE_WINDOW_SIZE && (
                    <>
                        <ul className='flex flex-row justify-between items-center space-x-10'>
                            {navbar.map((items) => (
                                <a key={items.id} href={items.link} className='font-bold'>
                                    <li>{items.title}</li>
                                </a>
                            ))}
                        </ul>
                        <Button text={"Contact"} specific="nav_button_full" />
                    </>
                )}

                <div className=' block md:hidden text-4xl'>
                    {shownav ? <FaTimes className="" onClick={() => setShowNav(!shownav)} /> : <IoMdMenu className="" onClick={() => setShowNav(!shownav)} />}
                </div>

            </nav>
            {shownav ?
                <div className='bg-white px-12 block md:hidden'>
                    <ul className='flex flex-row justify-between items-center space-x-10 pb-5'>
                        {navbar.map((items) => (
                            <a key={items.id} href={items.link} className='font-bold'>
                                <li>{items.title}</li>
                            </a>
                        ))}
                        <Button text={"Contact"} specific="nav_button_full" />
                    </ul>


                </div>

                : ""}
        </header>
    )
}

export default Navbar
