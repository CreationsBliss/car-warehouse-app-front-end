import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { AiFillTrophy } from 'react-icons/ai';
import { GrStatusCriticalSmall } from 'react-icons/gr';
import { BsFillCalculatorFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons//ai';
import './Finance.css';

const Finance = () => {
  return (
    <div className='feature-area'>
      <div className='py-5'>
        <div className='text-center'>
          <div className='feature-icon-top-box'>
            <AiFillCar className='feature-top-icon' />
          </div>
          <h1>Shop, Finance and Buy Your Car</h1>
          <p className="lead pb-5">Visit one of the largest used car dealerships <br /> in the New York. Visit us today.</p>
        </div>
        <div className="container feature-box">
          <div className="row g-5">
            <div className="col-12 col-md-6">
              <div className="feature-detail">
                <div className="feature-icon-box">
                  <AiFillTrophy className='feature-icon' />
                </div>
                <div className="feature-icon-text">
                  <h4>New Specials</h4>
                  <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="feature-detail">
                <div className="feature-icon-box">
                  <GrStatusCriticalSmall className='feature-icon' />
                </div>
                <div className="feature-icon-text">
                  <h4>Used Specials</h4>
                  <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.</p>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6">
              <div className="feature-detail">
                <div className="feature-icon-box">
                  <AiFillSetting className='feature-icon' />
                </div>
                <div className="feature-icon-text">
                  <h4>Schedule Service</h4>
                  <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="feature-detail">
                <div className="feature-icon-box">
                  <BsFillCalculatorFill className='feature-icon' />
                </div>
                <div className="feature-icon-text">
                  <h4>Value Trade</h4>
                  <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;