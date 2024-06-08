import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a>Home</a></li>
        <li>
          <a>Services</a>
          <ul className="dropdown1">
            <li><a>Yoga</a></li>
            <li><a>Massages</a></li>
            <li><a>Books</a></li>
          </ul>
        </li>
        <li><a>Alternatives</a></li>
        <li><a>Products</a></li>
        <li className="dropdown-trigger">
          <a>Contact Us</a>
          <ul className="dropdown3">
            <li><a>What is Ayurveda</a></li>
            <li><a>Customer Experiences</a></li>
            <li><a>Contact Doctors</a></li>
            <li><a>About Creators</a></li>
            <li><a>Know More</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
