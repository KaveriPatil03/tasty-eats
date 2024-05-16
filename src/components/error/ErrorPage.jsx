import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='max-w-[1640px] text-center py-40'>
      <h1 className='text-9xl text-orange-500'>OOPS!</h1>
      <h1 className='text-2xl leading-10'>404 Page Not Found</h1>
      <p className='font-bold'>The page you are looking for doesn't exist.</p>
      <button className='mt-5 bg-orange-500 border-orange-500 text-white font-semibold'>
        <Link to="/">Go back home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;