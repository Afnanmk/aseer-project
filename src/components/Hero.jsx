import React, {useState} from 'react'
import { CiLocationOn, CiGlobe } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className=' text-white bg-hero-pattern w-full min-h-[80vh] lg:min-h-[120vh] bg-no-repeat bg-cover bg-center pb-[5rem] relative'>
        <header className='bg-black w-full lg:border-b-[2px] lg:border-[#5b635c] bg-opacity-[0.2]'>
        <div className='container-custom'>
        <nav className='flex lg:justify-between items-center py-6'>
            <div>
                <a href="#home"><img src="Assets/images/logos/aseer-logo.png" alt="" className='max-w-full h-auto w-[140px]' id='home'/></a>
            </div>
            <div className='hidden lg:static lg:block text-lg font-[600] px-6'>
                <ul className='flex gap-6 items-center'>
                    <li className=' hover:text-[var(--primary)]'><a href="#home">Discover Aseer</a></li>
                    <li className='hover:text-[var(--primary)]'><a href="#home">Plan your trip</a></li>
                    <li className='hover:text-[var(--primary)]'><a href="#home">Seasons and Events</a></li>
                    <li className='border border-1 rounded-full px-5 py-3 text-center hover:bg-[var(--primary)] cursor-pointer'><a href="#home">Discover Aseer Booklet</a></li>
                </ul>
            </div>
            <div className='flex gap-5 ml-auto lg:ml-0'>
            <a href="#home" className='border border-2 rounded-full p-2'><IoIosMoon size={30}/></a>
            <a href="#home" className='border border-2 rounded-full p-2'><CiLocationOn size={30}/></a>
            <a href="#home" className='border border-2 rounded-full p-2'><CiGlobe size={30}/></a>
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
                    <li className='mb-10 border-b-[1px] pb-5'><a href="#home">Discover Aseer</a></li>
                    <li className='mb-10 border-b-[1px] pb-5'><a href="#home">Plan your trip</a></li>
                    <li className='mb-10'><a href="#home">Seasons and Events</a></li>
                    <li className='mb-10'><a href="#home" className=''>Discover Aseer Booklet</a></li>
                </ul>
            </div>
        </header>

        <main>
         {/* <img src="Assets/images/asser-1.jpg" alt="" className='object-cover w-full h-[100vh]' /> */}
        
         <div className='container-custom flex justify-between items-center translate-y-[15%] lg:translate-y-[50%]'>
         
            <div className=''>
                <h1 className='font-[700] text-4xl lg:text-6xl mb-10 tracking-tight'>A Thousand<br></br>Welcome to Aseer</h1>
                <h2 className='font-[700] text-2xl mb-1'>Rediscover Aseer:</h2>
                <p className='font-[600] text-lg lg:w-[50%]'>Where timeless traditions meet breathtaking landscape. Experience a unique blend of culture, adventure, and unparalleled beauty.</p>
            </div>
            <div className='flex flex-col gap-4 ml-5 md:mr-[5rem]'>
                <div className='border-l-[1px] h-[50px] translate-x-[50%] opacity-[0.6]'></div>
                <a href="#home"><FaFacebookF size={30}/></a>
                <a href="#home"><FaInstagram size={30}/></a>
                <a href="#home"><FaXTwitter size={30}/></a>
                <a href="#home"><FaSnapchatGhost size={30}/></a>
                <div className='border-l-[1px] h-[50px] translate-x-[50%] opacity-[0.6]'></div>
            </div>
            </div>
            
        </main>
    </section>
  )
}

export default Hero