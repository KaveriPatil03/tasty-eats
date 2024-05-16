import React, { useEffect, useState } from 'react'
import Home from './Home';

const Payment = () => {

    const [payment, setPayment] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setPayment(false)
        }, 3000)
    },[])


  return (
    <>
      {!payment ? <Home/> :   <div className="bg-green-600 w-full">
            <h1 className='text-white text-center text-4xl py-[248px] md:py-48'>Payment Successful 🤩</h1>
        </div>}
    </>
  )
}

export default Payment