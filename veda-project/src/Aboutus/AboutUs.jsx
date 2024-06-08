import React, { useEffect } from 'react';
import './aboutus.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
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
            <a href="https://www.linkedin.com/in/vaishnavi-poti" target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="v-link" />
            </a>
            <a href="mailto:vaishnavi@example.com">
              <FaEnvelope id="v-mail" />
            </a>
            <FaTwitter id="v-twitter" />
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
            <a href="https://github.com/Ashmit" target="_blank" rel="noopener noreferrer">
              <FaGithub id="a-git" />
            </a>
            <a href="https://www.linkedin.com/in/ashmit-srivastava" target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="a-link" />
            </a>
            <a href="mailto:ashmit@example.com">
              <FaEnvelope id="a-mail" />
            </a>
            <FaTwitter id="a-twitter" />
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
            <a href="https://github.com/Dhruv" target="_blank" rel="noopener noreferrer">
              <FaGithub id="d-git" />
            </a>
            <a href="https://www.linkedin.com/in/dhruv-tater" target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="d-link" />
            </a>
            <a href="mailto:dhruv@example.com">
              <FaEnvelope id="d-mail" />
            </a>
            <FaTwitter id="d-twitter" />
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
            <a href="https://github.com/Shweta" target="_blank" rel="noopener noreferrer">
              <FaGithub id="s-git" />
            </a>
            <a href="https://www.linkedin.com/in/shweta-sidhwani" target="_blank" rel="noopener noreferrer">
              <FaLinkedin id="s-link" />
            </a>
            <a href="mailto:shweta@example.com">
              <FaEnvelope id="s-mail" />
            </a>
            <FaTwitter id="s-twitter" />
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
