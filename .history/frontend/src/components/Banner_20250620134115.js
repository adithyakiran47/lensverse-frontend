import React from 'react';
import './Banner.css';

const Banner = ({ onBookClick }) => {
  return (
    <div id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left">
            <h2 className="cap">Capturing every moment with precision</h2>
            <p>Lensverse, your coverage team in action!</p>
            <div className="from">
              <button onClick={onBookClick}>BOOK</button>
            </div>
          </div>
          <div className="banner-right">
            <img src="channel logo new.png" alt="Lensverse Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
