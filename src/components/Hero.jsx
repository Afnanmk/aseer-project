import React from 'react'
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Header from './Header';

const Hero = () => {
  

  return (
    <section className=' text-white bg-hero-pattern w-full min-h-[80vh] lg:min-h-[100vh] bg-no-repeat bg-cover bg-center pb-[5rem] relative overflow-hidden'>
       
        <Header/>
        <main>
         {/* <img src="Assets/images/asser-1.jpg" alt="" className='object-cover w-full h-[100vh]' /> */}
        
         <div className='container-custom flex justify-between items-center md:py-[5rem] 2xl:py-[15rem]'>
         
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