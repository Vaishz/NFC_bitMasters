import React from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css';
const Nav = () => {
  return <>
  <nav className="navbar">
        <ul>
          <li><NavLink to="/">Home </NavLink></li>
          <li>
            <a href="#">Services</a>
            <ul className="dropdown1">
              <li><a href="Yoga/Yoga.html" target="_blank">Yoga</a></li><br />
              <li><a href="Map/massageMap.html">Massages</a></li><br />
              <li><a href="Books/books.html" target="_blank">Books</a></li><br />
            </ul>
          </li>
          <li><a href="Alternatives/alternatives.html">Alternatives</a></li>
          <li><a href="Products/products.html">Products</a></li>
          <li className="dropdown-trigger">
            <a href="#">Contact Us</a>
            <ul className="dropdown1">
              <li><a href="Whatis.html">What is Ayurveda</a></li><br />
              <li><a href="CustomerExp.html">Customer Experiences</a></li><br />
              <li><a href="doctor.html">Contact Doctors</a></li><br />
              <li><a href="Aboutus/aboutus.html">About Creators</a></li><br />
              <li><a href="body-types/diseases.html">Know More</a></li>
            </ul>
          </li>
        </ul>
      </nav>
  </>
}

export default Nav