import React from 'react';
import about from '../../assets/about-us.jpg';
import './AboutSection.css'

const AboutSection = () => {
  return (
    <div className='about-us-area'>
      <div className="about-us-container">
        <div className="about-us-left">
          <img src={about} alt="about imge" />
        </div>
        <div className="about-us-right">
          <h1>About Us</h1>
          <p className='lead'>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.</p>
          <p>As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction. How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.</p>
          <ul>
            <li>
              <span className="about-us-icon">
                <i class="bi bi-check-circle-fill"></i> Quality Cars at Guaranteed Prices
              </span>
            </li>
            <li>
              <span className="about-us-icon">
                <i class="bi bi-check-circle-fill"></i> Quality Cars at  Routine Service Available
              </span>
            </li>
            <li>
              <span className="about-us-icon">
                <i class="bi bi-check-circle-fill"></i> Turn Your Car Into Cash
              </span>
            </li>
          </ul>
          <button className='about-us-btn'>About Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;