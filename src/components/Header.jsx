import React, {useState} from 'react'
import { CiLocationOn, CiGlobe } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='text-white bg-black w-full lg:border-b-[2px] lg:border-[#5b635c] bg-opacity-[0.2] min-h-[100px]'>
    <div className='container-custom'>
    <nav className='flex lg:justify-between items-center py-6'>
        <div>
            <Link to="/"><img src="Assets/images/logos/aseer-logo.png" alt="" className='max-w-full h-auto w-[140px]' id='home'/></Link>
        </div>
        <div className='hidden lg:static lg:block text-lg font-[600] px-6'>
            <ul className='flex gap-6 items-center'>
                <li className=' hover:text-[var(--primary)]'><Link to="/about">Discover Aseer</Link></li>
                <li className='hover:text-[var(--primary)]'><a href="#home">Plan your trip</a></li>
                <li className='hover:text-[var(--primary)]'><a href="#home">Seasons and Events</a></li>
                <li className='border border-1 rounded-full px-5 py-3 text-center hover:bg-[var(--primary)] cursor-pointer'><a href="#home">Discover Aseer Booklet</a></li>
            </ul>
        </div>
        <div className='flex gap-5 ml-auto lg:ml-0'>
        <a href="#home" className='border-2 rounded-full p-2'><IoIosMoon className='w-[20px] h-[20px]   lg:w-[30px] lg:h-[30px]'/></a>
        <a href="#home" className='border-2 rounded-full p-2'><CiLocationOn className='w-[20px] h-[20px]   lg:w-[30px] lg:h-[30px]'/></a>
        <a href="#home" className='border-2 rounded-full p-2'><CiGlobe className='w-[20px] h-[20px]   lg:w-[30px] lg:h-[30px]'/></a>
        </div>

         {/* hamburger menu */}
    <div className='lg:hidden ml-5' onClick={toggleMenu}>
     <CgMenuRight size={40}/>
    </div>
        </nav>
        
        </div>
        {/* MOBILE MENU */}

        <div className={`absolute lg:hidden z-30 bg-white bg-opacity-30 backdrop-blur-[100px] w-full left-0 text-[1.115rem] font-[600] transition-[height] duration-300 ease-in-out overflow-hidden ${isOpen ? 'h-[22rem]' : 'h-0'}`}>

            <ul className='container-custom py-8'>
                <li className='mb-10 border-b-[1px] pb-5'><Link to="/about">Discover Aseer</Link></li>
                <li className='mb-10 border-b-[1px] pb-5'><a href="#home">Plan your trip</a></li>
                <li className='mb-10'><a href="#home">Seasons and Events</a></li>
                <li className='mb-10'><a href="#home" className=''>Discover Aseer Booklet</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header