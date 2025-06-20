import React from 'react';
import './Banner.css';

const Banner = ({ onBookClick }) => {
  return (
    <div id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left">
            <h2>Capturing every moment with precision</h2>
            <p>Lensverse, your coverage team in action!</p>
            <div className="from">
              <button onClick={onBookClick}>BOOK</button> {/* use button */}
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
