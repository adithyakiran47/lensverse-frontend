// src/components/Banner.js
import React from 'react';
import './Banner.css'; // we'll create this CSS file next

const Banner = () => {
  return (
    <div id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left">
            <h2>Capturing every moment with precision</h2>
            <p>Lensverse, your coverage team in action!</p>
            <div className="from">
              <a href="#">BOOK</a>
            </div>
          </div>
          <div className="banner-right">
            <img src="/logo192.png" alt="Lensverse Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
