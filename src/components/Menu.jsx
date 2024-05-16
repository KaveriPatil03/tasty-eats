import React, { useState } from 'react'
import Hero from './Hero'
import {data} from '../data/data.js'
import { Link } from 'react-router-dom'

const Menu = () => {
    

    const [foods, setFoods] = useState(data);

    // Filter Type
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    };

    // Filter By Price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    };

  return (
    <>
    <div>
    <Hero title="Our" spanTitle="Menu"/>


        <div className=" max-w-[1640px] m-auto px-4 py-12">
        <h1 className='text-orange-600 font-bold text-4xl text-center pb-10'>Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                <button onClick={() => filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burgers</button>
                <button onClick={() => filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
                <button onClick={() => filterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salads</button>
                <button onClick={() => filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chiken</button>
            </div>
        </div>

        {/* Filter Price */}
        {/* <div className='flex flex-col lg:flex-row justify-between'>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px]'>
                <button onClick={() => filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$</button>
                <button onClick={() => filterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$</button>
                <button onClick={() => filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$</button>
                <button onClick={() => filterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$$</button>
            </div>
        </div> */}

{/* Display images */}
    <div className='max-w-[1640px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
    {
            foods.map((item) => (
                <div key={item.id} className='border rounded-lg shadow-lg hover:scale-105 duration-300 bg-gray-100'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg rounded-es-[80px]' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-5'>
                        {/* <div> */}
                        <p className='font-bold'>{item.name}</p>
                        <p >
                            <span className='bg-orange-500 text-white p-1 rounded-3xl'>{item.price}</span>
                        </p>
                        </div>
                        <div>
                            <Link to={`/food/${item.id}`}>
                                <div className='bg-white border-orange-600 text-orange-600 text-center py-3'>View details</div>
                            </Link>
                        {/* </div> */}
                    </div>
                </div>
            ))
        }
    </div>

    {/* Load more button */}
    <div className='max-w-[1640px] flex justify-center'>
        <Link to={`/menu`}>
        <button className='mt-10 hidden border border-orange-600 text-orange-600 text-bold hover:bg-orange-600 hover:text-white'>Load More...</button>
        </Link>
    </div>
    
    </div>
        
    </div>
    </>
  )
}

export default Menu