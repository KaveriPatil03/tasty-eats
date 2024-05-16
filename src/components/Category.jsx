import React from 'react'
import { categories } from '../data/data.js'

const Category = () => {
    console.log(categories);
  return (
    <>
    <div className='max-w-[1640px] px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center pb-7'>Top Rated Categories</h1>

        {/* categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {
            categories.map((item) => (
                <div key={item.id} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20 h-20 object-cover bg-white shadow-lg rounded-full border-2 border-orange-600 ' src={item.image} alt={item.name} />
                </div>
            ))
        }
        </div>
    </div>
    </>
  )
}

export default Category