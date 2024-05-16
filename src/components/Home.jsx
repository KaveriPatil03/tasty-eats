import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import HeadlineCards from './HeadlineCards'
import Food from './Food'
import Category from './Category'
import Loader from './loader/Loader';

const Home = () => {
  // State to manage loading status
  // const [loading, setLoading] = useState(true);

  // // Example timeout to simulate data fetching
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Simulate loading for 3 seconds

  //   return () => clearTimeout(timer); // Cleanup the timer
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
     {/* {loading ? <Loader/>: */}
    <div>
        
    <Hero title="We" spanTitle="Deliver" subtitle="The Best" spanSubTitle="Tasty Foods" />
        <HeadlineCards />
        <Food />
        <Category />
    </div>
 {/* } */}
    </>
  )
}

export default Home