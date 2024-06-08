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
              <li><a href="index.html">Home</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="Books/books.html">Books</a></li>
              <li><a href="alternatives.html">Alternatives</a></li>
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
              <li><a href="#">Courses</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Yoga</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <h2>© [2023] bitMasters. All Rights Reserved.</h2>
      </div>
    </footer>
  );
}

export default Footer;
