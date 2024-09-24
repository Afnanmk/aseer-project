import React from 'react'
import Header from './Header'
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className='text-white about_hero min-h-[100vh] w-full font-display'>
       <Header/>
       <main className='container-custom relative flex flex-row items-center justify-center h-[60vh] py-5'>
       <div className='hidden absolute left-0 mx-10 md:inline-flex flex-col items-center gap-4'>
         <div className='border-l-[1px] h-[50px] opacity-[0.6]'></div>
            <a href="#home"><FaFacebookF size={30}/></a>
            <a href="#home"><FaInstagram size={30}/></a>
            <a href="#home"><FaXTwitter size={30}/></a>
            <a href="#home"><FaSnapchatGhost size={30}/></a>
          <div className='border-l-[1px] h-[50px] opacity-[0.6]'></div>
          </div>
          

         <div className='right flex flex-col items-center justify-center text-center'>
           <ul className='inline-flex flex-row items-center gap-3 font-[600]'>
            <li><Link to="/">Home</Link></li>
            <li><MdOutlineKeyboardArrowRight size={20}/></li>
            <li><Link to="/about">About Aseer</Link></li>
           </ul>
            <h1 className='text-3xl lg:text-6xl font-[900] my-8'>About Aseer</h1>
            <p className='text-xl font-[700]'>Welcome a thousand to the peaks of breathtaking nature</p>
         </div>
       </main>
    </section>
  )
}

export default AboutHero