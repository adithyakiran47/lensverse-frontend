
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <div className="service-title">
          <h3>SERVICES</h3>
          <p><b>Services We Offer</b><br />
            Portraits, weddings, events, commercial photography, lifestyle shoots, landscape photography, custom photo sessions, editing, retouching, and high-quality prints.
          </p>
        </div>

        <div className="service-details">
          <div className="service-detail">
            <img src="drone.png" alt="Drone Service" />
            <p><b>Drone Service</b><br /><br />Breathtaking aerial shots, capturing expansive landscapes and events.</p>
          </div>

          <div className="service-detail">
            <img src="/camera.png" alt="Camera Coverage" />
            <p><b>Camera Coverage</b><br /><br />Comprehensive coverage from multiple angles, ensuring every moment is documented.</p>
          </div>

          <div className="service-detail">
            <img src="/editing.png" alt="Editing Service" />
            <p><b>Editing Service</b><br /><br />Professional editing to enhance clarity, color, and create stunning results.</p>
          </div>

          <div className="service-detail">
            <img src="/social.png" alt="Social Marketing" />
            <p><b>Social Marketing</b><br /><br />Compelling content to boost your brand's online presence and engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
