import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Home </NavLink></li>
        <li>
        <NavLink to="/services">Services </NavLink>
          <ul className="dropdown1">
            <li><NavLink to="/yoga">Yoga </NavLink></li>
            <li><NavLink to="/alternatives">Alternatives</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/map">Massage Map</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/doctors">Doctors</NavLink></li>
        <li className="dropdown-trigger">
          <a>Quick Info</a>
          <ul className="dropdown3">
            <li><NavLink to="/learn">What is Ayurveda</NavLink></li>
            <li><NavLink to="/skin">Skin Types</NavLink></li>
            <li><NavLink to="/diseases">Diseases</NavLink></li>
            <li><NavLink to="/bodytypes">Body Types</NavLink></li>
            <li><NavLink to="/digestive">Digestive</NavLink></li>
            <li><NavLink to="/faq">FAQs</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
