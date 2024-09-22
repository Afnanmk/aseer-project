import React from 'react'

const Attractions = () => {
  return (
    <section className='mb-[6rem] mt-[4rem]'>
       <div className='container-custom'>
          <div className='flex flex-col md:flex-row justify-between md:items-center'>
            <div className=''>
                <h2 className='font-[700] text-2xl lg:text-4xl pb-8'>Attractions in Aseer</h2>
                <p className='font-[700] text-[var(--gray)] text-xl pt-8 pb-10 leading-loose'>Awaken your senses to a world of wonder</p>
            </div>
            <a href="#" className='btn w-[170px] transition hover:bg-white hover:border hover:border-[var(--primary)] hover:text-[var(--primary)]'>View More</a>
          </div>

          {/* card section starts */}
          <div className='flex flex-col md:flex-row justify-between gap-5 lg:gap-10 mt-14'>
            <div className='bg-white rounded-lg shadow overflow-hidden duration-500 hover:translate-y-[-14px]'>
               <a href="#" className=''><div className='relative'><img src="Assets/images/attractions/attraction-1.jpg" alt="" className='relative'/> <div className='absolute bg-[#627180] w-[180px] rounded-3xl py-1.5 px-2 text-center bottom-6 left-6 backdrop-blur-[100px] bg-opacity-50'><p className='text-white font-[700]'>AL Birk</p></div></div>
               
                <div className='px-4 pt-5 text-xl font-[700]'>
                    <p className='text-[#ff5a1f]'>AL Birk Beach</p>
                    <p className='pt-4 pb-7'>Blue waves and pristine beaches</p>
                </div>
                </a>
            </div>
            <div className=' bg-white rounded-lg shadow overflow-hidden duration-500 hover:translate-y-[-14px]'>
            <a href="#" className=''><div className='relative'><img src="Assets/images/attractions/attraction-2.jpg" alt="" className='relative'/> <div className='absolute bg-[#627180] w-[180px] rounded-3xl py-1.5 px-2 text-center bottom-6 left-6 backdrop-blur-[100px] bg-opacity-50'><p className='text-white font-[700]'>Abha</p></div></div>
            <div className='px-4 pt-5 text-xl font-[700]'>
                    <p className='text-[#ff5a1f]'>Tuesday Market</p>
                    <p className='pt-4 pb-7'>Stroll through the colorful local market</p>
                </div>
                </a>
            </div>
            <div className='bg-white rounded-lg shadow overflow-hidden duration-500 hover:translate-y-[-14px]'>
            <a href="#" className=''><div className='relative'><img src="Assets/images/attractions/attraction-3.webp" alt="" className='relative'/> <div className='absolute bg-[#627180] w-[180px] rounded-3xl py-1.5 px-2 text-center bottom-6 left-6 backdrop-blur-[100px] bg-opacity-50'><p className='text-white font-[700]'>Rijal Almaa</p></div></div>
            <div className='px-4 pt-5 text-xl font-[700]'>
                    <p className='text-[#ff5a1f]'>Honey Cottage</p>
                    <p className='pt-4 pb-7'>An intimate tale of flower and palate</p>
                </div>
                </a>
            </div>
          </div>
       </div>
    </section>
  )
}

export default Attractions