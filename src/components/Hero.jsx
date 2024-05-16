import React, { useEffect, useState } from 'react'
import Loader from './loader/Loader';
import bgImg from "../images/hero-bg.jpg"

const Hero = ({ title, spanTitle, subtitle, spanSubTitle }) => {
   // State to manage loading status
  //  const [loading, setLoading] = useState(true);

  //  // Example timeout to simulate data fetching
  //  useEffect(() => {
  //    const timer = setTimeout(() => {
  //      setLoading(false);
  //    }, 3000); // Simulate loading for 3 seconds
 
  //    return () => clearTimeout(timer); // Cleanup the timer
  //  }, []);
  return (
    <>
    {/* {loading ? <Loader />: */}
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:6xl lg:8xl font-bold'>{title} <span className='text-orange-500'>{spanTitle}</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:6xl lg:8xl font-bold text-orange-500'>{subtitle} <span className='text-gray-200'>{spanSubTitle}</span></h1>
            </div>

            {/* Image */}
            {/* <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
            <img className='w-full max-h-[500px] object-cover' src={bgImg} alt="" />
        </div>
    </div>
  {/* } */}
    </>
  )
}

export default Hero