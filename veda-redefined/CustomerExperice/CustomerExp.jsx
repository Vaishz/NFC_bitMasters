import React from "react";
import "./CusomerExp.css";

function CustomerExperiences() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="index.html">Home</a></li>
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

      <div className="scroll-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="card-container" key={index}>
            <div className="card">
              <div className="card-img-container">
                <img src="Images/doctor1.png" alt="Customer" />
              </div>
              <div className="details">
                <h3>Name: Cuss1</h3>
                <h1>"My Experience with Ayurvana was miraculous"</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet
                  dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerExperiences;
