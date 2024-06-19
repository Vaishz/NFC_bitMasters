import React from "react";
import { NavLink } from "react-router-dom";
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
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/books">Books</NavLink></li>
              <li><NavLink to="/bodytypes">Body Types</NavLink></li>
            </ul>
          </div>
          <div className="cols">
            <h4>Socialize! <div className="underline"><span></span></div> </h4>
            {/* 2nd column */}
            <ul>
              <li><a href="https://10times.com/india/ayurveda-herbal" target="_blank" rel="noopener noreferrer">Events</a></li>
              <li><a href="https://www.ayurvedacollege.net/blogs">Blogs</a></li>
              <li><a href="https://www.pinterest.com.au/livayurvedasydney/_created/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
              <li><a href="https://disboard.org/server/897138844422537336" target="_blank" rel="noopener noreferrer">Discord</a></li>
            </ul>
          </div>
          {/* 3rd column */}
          <div className="cols">
            <h4>Know Us<div className="underline"><span></span></div> </h4>
            <ul>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/customer">Testimonials</NavLink></li>
              <li><NavLink to="/alternatives">Alternatives</NavLink></li>
              <li><NavLink to="/yoga">Yoga</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <h2> 
        © 2024 Veda Refined. All rights reserved.</h2>
      </div>
    </footer>
  );
}

export default Footer;
