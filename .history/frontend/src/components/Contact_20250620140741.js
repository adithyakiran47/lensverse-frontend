// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="contactdetails">
          <h4>CONTACT</h4>
          <div className="contact-details">
            
            <div className="instapng">
              <a href="https://www.instagram.com/__lensverse__/" target="_blank" rel="noreferrer">
                <img src="/insta.png" alt="Instagram" />
              </a>
            </div>

            <div className="mailpng">
              <a href="mailto:lensverse@gmail.com">
                <img src="/mail.png" alt="Email" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
