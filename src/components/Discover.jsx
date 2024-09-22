import React from 'react'

const Discover = () => {
  return (
    <section className='mt-[-35px] md:mt-[-90px] mb-[-90px]'>
      <div className='container-custom bg-white rounded-xl py-11 px-6 md:px-11 relative z-10'>
         <div className='text-center'>
            <h2 className='font-[700] text-4xl pb-8'>Discover <span className='text-[var(--primary)]'>Aseer</span></h2>
            <p className='font-[700] text-[var(--gray)] text-xl pt-8 pb-10 leading-loose'>
        In a captivating symphony of beauty, mountain peaks merge with the pristine shores, as golden sands wrap around lush plateaus. Nature conducts a graceful dance, where the warmth of the plains twirls with the rain, and mist drifts elegantly through the landscape's splendor.
        </p>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 text-xl'>
            <a href="">
            <div className='overflow-hidden w-full rounded-xl'>
            <img src="Assets/images/discover/image1.jpg" alt="" className='object-cover h-[120px] lg:h-[291px] w-full duration-500 hover:scale-110'/>
            </div>
            <p className='font-[700] text-center mt-3'>Events</p>
            </a>
            <a href="">
            <div className='overflow-hidden w-full rounded-xl'>
            <img src="Assets/images/discover/image-2.webp" alt="" className='object-cover h-[120px] lg:h-[291px] w-full duration-500 hover:scale-110'/>
            </div>
            <p className='font-[700] text-center mt-3'>Experiences</p>
            </a>
            <a href="">
            <div className='overflow-hidden w-full rounded-xl'>
            <img src="Assets/images/discover/image-3.webp" alt="" className='object-cover h-[120px] lg:h-[291px] w-full duration-500 hover:scale-110'/>
            </div>
            <p className='font-[700] text-center mt-3'>Destinations</p>
            </a>
            <a href="">
            <div className='overflow-hidden w-full rounded-xl'>
            <img src="Assets/images/discover/image-4.webp" alt="" className='object-cover h-[120px] lg:h-[291px] w-full duration-500 hover:scale-110'/>
            </div>
            <p className='font-[700] text-center mt-3'>Accommodations</p>
            </a>
            <a href="">
            <div className='overflow-hidden w-full rounded-xl'>
            <img src="Assets/images/discover/image-5.webp" alt="" className='object-cover h-[120px] lg:h-[291px] w-full duration-500 hover:scale-110'/>
            </div>
            <p className='font-[700] text-center mt-3'>Cuisines</p>
            </a>
            <a href="">
            <div className='overflow-hidden w-full rounded-xl'>
            <img src="Assets/images/discover/image-6.webp" alt="" className='object-cover h-[120px] lg:h-[291px] w-full duration-500 hover:scale-110'/>
            </div>
            <p className='font-[700] text-center mt-3'>Attractions</p>
            </a>
          </div>
         </div>
      </div>
    </section>
  )
}

export default Discover