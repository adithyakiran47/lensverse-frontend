// src/components/Team.js
import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div id="team">
      <div className="container">
        <div className="members">
          <h4>FOUNDERS</h4>
          <div className="member service-details">

            <div className="kiran">
              <img src="IMG_0384.JPG" alt="Adithya Kiran V" />
              <h5>ADITHYA KIRAN V</h5>
              <div className="social">
                <a href="https://www.instagram.com/adithya.x/" target="_blank" rel="noreferrer">
                  <img src="/instagramlogo.png" alt="Instagram" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <img src="linkedin.png" alt="LinkedIn" />
                </a>
              </div>
            </div>

            <div className="vl">
              <img src="IMG_0383.JPG" alt="Arun VL" />
              <h6>ARUN VL</h6>
              <div className="social">
                <a href="https://www.instagram.com/__arun_vl__/" target="_blank" rel="noreferrer">
                  <img src="/instagramlogo.png" alt="Instagram" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <img src="linkedin.png" alt="LinkedIn" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
