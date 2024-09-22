import React, {useState, useEffect} from 'react'
import './Destinations.css';


const images = [
  { id: 1, url: '/Assets/images/destinations/destination_bg-1.jpg', thumb: '/Assets/images/destinations/destination_thumb-1.jpg',  h3: 'Mountains', h4: 'Abha' },
  { id: 2, url: '/Assets/images/destinations/destination_bg-2.jpg', thumb: '/Assets/images/destinations/destination_thumb-2.webp', h3: 'The Desert', h4: 'Bisha' },
  { id: 3, url: '/Assets/images/destinations/destination_bg-3.jpg', thumb: '/Assets/images/destinations/destination_thumb-3.jpg',  h3: 'The Tihama Plains', h4: 'Rijal Almaa' },
  { id: 4, url: '/Assets/images/destinations/destination_bg-4.webp', thumb: '/Assets/images/destinations/destination_thumb-4.webp',  h3: 'The Coast',
    h4: 'Al Birk' }
];

const Destinations = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div
      className="slider pb-[5rem] pt-[10rem] overflow-hidden"
      style={{ backgroundImage: `url(${images[currentIndex].url})` }}
    >

        <div className="container-custom caption text-white font-[700] mb-[10rem]">
          <h2 className='text-2xl lg:text-4xl mb-[3rem]'>Main Destinations</h2>
          <h3 className='text-xl md:text-2xl'>{images[currentIndex].h3}</h3>
          </div>  

          <div className='container-custom text-white font-[700]'>
          <div className=''>
          <h4 className='text-2xl lg:text-4xl mb-[3rem]'>{images[currentIndex].h4}</h4>
          <p className='text-xl leading-relaxed lg:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus hic obcaecati enim, cum ut accusantium quaerat at quibusdam voluptas! Modi voluptatem explicabo exercitationem ratione at ab tempore, sapiente delectus error.</p>
          </div>
          <div className="flex-wrap sm:flex-nowrap thumbnails gap-[10px] md:gap-[20px]">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.thumb}
              alt={`Thumbnail ${index + 1}`}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
          </div>
          
         
      
        
      
    </div>
  );
}

export default Destinations