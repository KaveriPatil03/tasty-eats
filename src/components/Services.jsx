import React from 'react'
import { FaHeadset, FaShoppingCart, FaUserTie, FaUtensils } from 'react-icons/fa'
import Hero from './Hero'

const Services = () => {
  return (
    <>
     <Hero title="Our" spanTitle="Services"/>
    <div className='w-max-[1640px]'>
        <h1 className='text-center pt-10 text-4xl text-orange-500 font-bold'>Our Services</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-10 p-10 md:p-20">
            <div className='p-10 shadow-2xl hover:-translate-y-6 duration-300'>
                <FaUserTie size={40} className='text-orange-500'/>
                <h1 className='text-xl font-bold leading-10'>Master Chefs</h1>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='p-10 shadow-2xl hover:-translate-y-6 duration-300'>
            <FaUtensils size={40} className='text-orange-500'/>
                <h1 className='text-xl font-bold leading-10'>Quality Food</h1>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='p-10 shadow-2xl hover:-translate-y-6 duration-300'>
            <FaShoppingCart size={40} className='text-orange-500'/>
                <h1 className='text-xl font-bold leading-10'>Online Order</h1>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='p-10 shadow-2xl hover:-translate-y-6 duration-300'>
            <FaHeadset size={40} className='text-orange-500'/>
                <h1 className='text-xl font-bold leading-10'>24/7 Service</h1>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Services