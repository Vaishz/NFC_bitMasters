import React from "react";
import "./footer.css"; 
import Logo from '../Images/logo.png';

function Footer() {
  return (
    <footer>
      <div className="maincontainer">
        <div className="row">
          {/* text and logo */}
          <div className="cols">
            <img src={Logo} id="flogo" alt="Logo" />
            <div className="content">
              "Veda Redefined" is a website dedicated to offering Ayurvedic alternatives and solutions to modern pharmaceutical drugs.
            </div>
          </div>
          <div className="cols">
            <h4>Browse! <div className="underline"><span></span></div></h4>
            {/* 1st column */}
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/books">Books</a></li>
              <li><a href="/bodytypes">Body Types</a></li>
            </ul>
          </div>
          <div className="cols">
            <h4>Socialize! <div className="underline"><span></span></div> </h4>
            {/* 2nd column */}
            <ul>
              <li><a href="https://10times.com/india/ayurveda-herbal" target="_blank" rel="noopener noreferrer">Events</a></li>
              <li><a href="Aboutus/aboutus.html">About Us</a></li>
              <li><a href="https://www.pinterest.com.au/livayurvedasydney/_created/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
              <li><a href="https://disboard.org/server/897138844422537336" target="_blank" rel="noopener noreferrer">Discord</a></li>
            </ul>
          </div>
          {/* 3rd column */}
          <div className="cols">
            <h4>Know<div className="underline"><span></span></div> </h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/customer">Testimonials</a></li>
              <li><a href="/alternatives">Alternatives</a></li>
              <li><a href="/yoga">Yoga</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <h2> @2024 Veda Refined. All rights reserved.</h2>
      </div>
    </footer>
  );
}

export default Footer;
