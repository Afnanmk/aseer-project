import React from 'react'
import { CiSearch, CiLocationOn, CiGlobe } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='flex items-center border border-red-600 bg-gray-700 text-white h-[100px] max-h-max'>
      <div className='relative flex lg:justify-between items-center container-custom border border-black'>
        {/* nav div 2 */}
        <div className=''>
          <img src="Assets/images/logos/aseer-logo.png" alt="" className='max-w-full h-auto w-[150px]'/>
        </div>
       
        {/* nav div 1 */}
        <div className='hidden lg:block px-6'>
         <ul className='flex items-center font-[700] text-lg'>
           <li className='mr-[15px]'><a href="#">Discover Aseer</a></li>
           <li className='mx-[15px]'><a href="#">Plan your trip</a></li>
           <li className='mx-[15px]'><a href="#">Seasons and Events</a></li>
           <li className='border border-1 rounded-full px-5 py-3'><a href="#">Discover Aseer Booklet</a></li>
         </ul>
        </div>
       
        {/* nav div 3 */}
        <div className='flex ml-auto lg:ml-0'>
          <a href="" className='border border-2 rounded-full p-2 mr-5'><IoIosMoon className='w-[30px] h-[30px]'/></a>
          <a href="" className='border border-2 rounded-full p-2 mr-5'><CiLocationOn className='w-[30px] h-[30px]'/></a>
          <a href="" className='border border-2 rounded-full p-2'><CiGlobe className='w-[30px] h-[30px]'/></a>
    
        </div>

        {/* hamburger menu */}
        <div className='lg:hidden ml-5'>
         <CgMenuRight size={40}/>
        </div>
        {/* mobile menu */}
        <div className='absolute bg-black w-full top-[85px] overflow-hidden'>
          <ul className='py-9 px-6'>
          <li className='mb-5 border-b-2 pb-5'><a href="#">Discover Aseer</a></li>
           <li className='mb-5 border-b-2 pb-5'><a href="#">Plan your trip</a></li>
           <li className='mb-5'><a href="#">Seasons and Events</a></li>
           <li className=''><a href="#">Discover Aseer Booklet</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar