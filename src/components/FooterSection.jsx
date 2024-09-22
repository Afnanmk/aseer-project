import React from 'react'

const FooterSection = () => {
  return (
    <footer className='bg-black text-white py-10'>
       <div className='container-custom footer_grid font-[700]'>

         <div className='footer_grid_item item-1 flex items-center'>
           <a href="#"><img src="Assets/images/logos/aseer_logo.svg" alt="" /></a>
         </div>

         <div className='footer_grid_item item-2'>
           <p className='font-[700] text-xl mb-6'>Connect with us</p>
           <div className='flex gap-5 mb-10'>
            <a href="" className=''><img src="Assets/images/logos/linkedin.svg" alt=""/></a>
            <a href="" className=''><img src="Assets/images/logos/instagram.svg" alt="" /></a>
            <a href="" className=''><img src="Assets/images/logos/whatsapp.svg" alt="" /></a>
            <a href="" className=''><img src="Assets/images/logos/snapchat.svg" alt="" /></a>
           </div>
           {/* <div className=''>
             <a href="" className='bg-[var(--primary)] py-3 px-6 rounded-full'>Camping Guideline</a>
           </div> */}
         </div>

         <div className='footer_grid_item item-3'>
          <p className='font-[700] text-xl mb-6'>Call center</p>
          <div>
          <p className='mb-3'>+966734325434</p>
          <p>International Call center</p>
          </div> 
         </div>

         <div className='footer_grid_item item-4'>
          <p className='font-[700] text-xl mb-6'>Powered by</p>
          <div className=''>
            <a href="" rel='noopener noreferrer'>
              <img src="Assets/images/logos/poweredby.png" className='w-32' alt="" />
            </a>
          </div>
         </div>
         
         <div className='divider'></div> 

         <div className='footer_grid_item item-5'>
           <p className='font-[700] text-xl mb-6'>Discover Aseer</p>
           <ul>
            <li className='mb-3'><a href="#">About Aseer</a></li>
            <li className='mb-3'><a href="#">Destinations</a></li>
            <li className='mb-3'><a href="#">Attractions</a></li>
            <li className='mb-3'><a href="#">Experiences</a></li>
            <li className='mb-3'><a href="#">Aseer Cuisine</a></li>
           </ul>
         </div>

         <div className='footer_grid_item item-6'>
          <p className='font-[700] text-xl mb-6'>Plan Your Trip</p>
          <ul>
            <li className="mb-3"><a href="#">Accomodation</a></li>
            <li className="mb-3"><a href="#">Restaurants</a></li>
            <li className="mb-3"><a href="#">Recommended Trips</a></li>
            <li className="mb-3"><a href="#">Tour Guides</a></li>
            <li className="mb-3"><a href="#">Supporting Services</a></li>
           </ul>
         </div>

         <div className='footer_grid_item item-7'>
         <p className='font-[700] text-xl mb-6'>Seasons and Events</p>
          <ul>
            <li className="mb-3"><a href="#">Ramadan Events</a></li>
            <li className="mb-3"><a href="#">Eid Events</a></li>
            <li className="mb-3"><a href="#">Jacaranda Season</a></li>
            <li className="mb-3"><a href="#">Aseer Summer Season</a></li>
            <li className="mb-3"><a href="#">Aseer Winter Season</a></li>
           </ul>
         </div>

         <div className='footer_grid_item item-8'>
         <p className='font-[700] text-xl mb-6'>Contact Us</p>
          <ul>
            <li className="mb-3"><a href="#">Contact Us</a></li>
            <li className="mb-3"><a href="#">Tourist Guide Registration</a></li>
            <li className="mb-3"><a href="#">Tourist Guide</a></li>
            <li className="mb-3"><a href="#">Tourist Guide Login</a></li>
           </ul>
           <p className='font-[700] text-xl mb-6'>Newsletter</p>
           <p className='mb-6 lg:max-w-[300px]'>Sign up for our newsletter to hear more about special offers and discounts</p>
           <div className='lg:max-w-[450px]'>
            <form action="" className='footer_form flex flex-row items-center gap-x-1'>
              <input type="email" placeholder='example@email.com' className='bg-gray-800 py-3 px-5 rounded-full flex-1'/>
              <button className="bg-white text-black py-3 px-5 rounded-full" type='submit'>Subscribe</button>
            </form>
           </div>
         </div>
       </div>
    </footer>
  )
}

export default FooterSection