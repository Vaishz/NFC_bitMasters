import React, { useEffect } from 'react';
import './aboutus.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";
import Typed from 'typed.js';
import VaishnaviImage from './Images/Vaishnavi.jpg';
import AshmitImage from './Images/ash.jpeg';
import DhruvImage from './Images/druve.jpeg';
import ShwetaImage from './Images/shewta.jpeg';

const AboutUs = () => {
  useEffect(() => {
    const typed = new Typed('#abo_title', { 
      strings: ['About Us'],
      typeSpeed: 50,
    });
  
    return () => {
      typed.destroy(); // Using the correct instance to destroy
    };
  }, []);
  

  return (
    <div className="abo_card-container">
      <div id="abo_title"></div>

      {/* Vaishnavi Card */}
      <div className="abo_card">
        <div className="abo_card-img-container">
          <img src={VaishnaviImage} alt="Vaishnavi" />
        </div>
        <div className="abo_details">
          <h2>Name: Vaishnavi Poti</h2>
          <br />
          <h3>Age: 19</h3>
          <br />
          <h4>Hobbies: Singing</h4>
          <h5>
            <a href="https://github.com/Vaishz" target="_blank" rel="noopener noreferrer">
              <FaGithub id="v-git" />
            </a>
            <a href="https://www.linkedin.com/in/vaishnavi-v-p" target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="v-link" />
            </a>
            <a href="mailto:poti.vaishnavi21@gmail.com">
              <FaEnvelope id="v-mail" />
            </a>
            <a href="https://twitter.com/yep_vaishz" target="_blank" rel="noopener noreferrer">
              <FaTwitter id="v-twitter" />
            </a>
          </h5>
        </div>
      </div>

      {/* Ashmit Card */}
      <div className="abo_card">
        <div className="abo_card-img-container">
          <img src={AshmitImage} alt="Ashmit" />
        </div>
        <div className="abo_details">
          <h2>Name: Ashmit Srivastava</h2>
          <br />
          <h3>Age: 19</h3>
          <br />
          <h4>Hobbies: Reading</h4>
          <h5>
            <a href="https://github.com/AshmitSrivastava" target="_blank" rel="noopener noreferrer">
              <FaGithub id="a-git" />
            </a>
            <a href="https://www.linkedin.com/in/ashmit-srivastava-4443ba21a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="a-link" />
            </a>
            <a href="mailto:ashmitsrivastava@example.com">
              <FaEnvelope id="a-mail" />
            </a>

            <a href="https://www.instagram.com/ashmit.s.1607/" target="_blank" rel="noopener noreferrer">
              <FaInstagram id="a-instagram" />
            </a>
          </h5>
        </div>
      </div>

      {/* Dhruv Card */}
      <div className="abo_card">
        <div className="abo_card-img-container">
          <img src={DhruvImage} alt="Dhruv" />
        </div>
        <div className="abo_details">
          <h2>Name: Dhruv Tater</h2>
          <br />
          <h3>Age: 19</h3>
          <br />
          <h4>Hobbies: Gaming</h4>
          <h5>
            <a href="https://github.com/Dhruvt0310" target="_blank" rel="noopener noreferrer">
              <FaGithub id="d-git" />
            </a>
            <a href="https://www.linkedin.com/in/dhruv-tater-404810291/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="d-link" />
            </a>
            <a href="mailto:taterdhruv0310@gmail.com">
              <FaEnvelope id="d-mail" />
            </a>

            <a href="https://www.instagram.com/dhruv_tater/" target="_blank" rel="noopener noreferrer">
              <FaInstagram id="d-instagram" />
            </a>
          </h5>
        </div>
      </div>

      {/* Shweta Card */}
      <div className="abo_card">
        <div className="abo_card-img-container">
          <img src={ShwetaImage} alt="Shweta" />
        </div>
        <div className="abo_details">
          <h2>Name: Shweta Sidhwani</h2>
          <br />
          <h3>Age: 19</h3>
          <br />
          <h4>Hobbies: Drawing</h4>
          <h5>
            <a href="https://github.com/shwetasidhwani" target="_blank" rel="noopener noreferrer">
              <FaGithub id="s-git" />
            </a>
            <a href="https://www.linkedin.com/in/shweta-sidhwani-b66153287/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="s-link" />
            </a>
            <a href="mailto:shwetasidhwani@gmail.com">
              <FaEnvelope id="s-mail" />
            </a>

            <a href="https://www.instagram.com/shweta_sidh" target="_blank" rel="noopener noreferrer">
              <FaInstagram id="s-instagram" />
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
