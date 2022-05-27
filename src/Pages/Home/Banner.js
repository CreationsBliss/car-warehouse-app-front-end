import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../assets/banner1.png';
import './Banner.css';

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='banner-heading'> Welcome to <br /> Vehica Car Dealer</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='banner-heading'>Let Us Help You <br /> Get Your Next Car!</h1>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default Banner;
