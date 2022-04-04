import React from 'react';
import imgNotFound from '../../assest/images/NotFound.jpg';

const NotFound = () => {
  return (
    <div>
      <img src={imgNotFound} alt="not found" className='w-full h-screen' />
    </div>
  );
};

export default NotFound;
