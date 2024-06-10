import React from 'react';
import './services.css';

function Services() {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Discover the holistic healing practices of Ayurveda and Yoga.</p>
      </header>
      
      <div className="service-section">
        <div className="service">
          <div className="service-image">
            <img src="Images/ayurveda.jpg" alt="Ayurveda Consultation" />
          </div>
          <div className="service-content">
            <h2>Ayurveda Consultation</h2>
            <p>Experience personalized health assessments and treatments based on ancient Ayurvedic principles. Our experts will help you balance your doshas and achieve optimal wellness.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="service">
          <div className="service-image">
            <img src="Images/yoga.jpg" alt="Yoga Classes" />
          </div>
          <div className="service-content">
            <h2>Yoga Classes</h2>
            <p>Join our yoga sessions to enhance your physical and mental well-being. We offer classes for all levels, from beginners to advanced practitioners.Yoga can unlock your potential.</p>
            <button>Join a Class</button>
          </div>
        </div>

        <div className="service">
          <div className="service-image">
            <img src="Images/massage.jpg" alt="Ayurvedic Massages" />
          </div>
          <div className="service-content">
            <h2>Ayurvedic Massages</h2>
            <p>Relax and rejuvenate with our Ayurvedic massages. Our therapies use natural oils and techniques to promote healing and relaxation. Massages heal the body and the soul.</p>
            <button>Book a Massage</button>
          </div>
        </div>

        <div className="service">
          <div className="service-image">
            <img src="Images/nutrition.jpg" alt="Nutrition & Diet Counseling" />
          </div>
          <div className="service-content">
            <h2>Nutrition & Diet Counseling</h2>
            <p>Get personalized diet plans and nutritional advice tailored to your body type and health goals. Our experts will guide you towards a balanced and healthy lifestyle.</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
