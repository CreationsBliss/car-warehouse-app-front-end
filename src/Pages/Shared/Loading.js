import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
  return (
    <div className='loading-container d-flex justify-content-center  align-items-center'>
      <Spinner animation="grow" />
    </div>
  );
};

export default Loading;