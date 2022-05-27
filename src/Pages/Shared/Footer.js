import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/vehica-footer-logo.png'

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='footer-area py-5'>
      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-md-4 footer-logo">
            <img src={footerLogo} height='50' alt="footer logo" />
          </div>
          <div className="col-12 col-md-4">
            <p className='footer-middle-text'>
              Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-address">
              <h2 class="footer-heading-two">(123) 456-78901</h2>
              <p class="footer-text">support@vehica.com</p>
              <p class="footer-text">West 12th Street</p>
              <p class="footer-text">New York, NY, USA</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row pt-5">
          <div className="col-12 col-md-6">
            <p className='copyright-text'>Copyright &copy; {year}. All rights reserved.</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="social-icon-box">
              <span className="social-icon"><i class="bi bi-facebook"></i></span>
              <span className="social-icon"><i class="bi bi-twitter"></i></span>
              <span className="social-icon"><i class="bi bi-linkedin"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;