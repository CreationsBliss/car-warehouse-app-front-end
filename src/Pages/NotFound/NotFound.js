import React from 'react';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <div className='container py-5'>
        <div className='w-50 mx-auto'>
          <h1 className='header404'>404</h1>
          <h3 className='sub-header404'>PAGE NOT FOUND</h3>
          <h2 className='detail-header404'>“You know what keeps going through my head? Where's my sandwich?”</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;