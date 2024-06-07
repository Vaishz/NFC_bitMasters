import React from "react";
import "./doctor.css"; // Assuming doctor.css is in the same directory

function Doctors() {
  return (
    <div>
      <header>
        <h1>Meet Our Doctors</h1>
      </header>

      <div className="container">
        <div className="bg-container">
          <img src="Images/MedWP-1.jpg" id="bgimg" alt="Background" />
        </div>
        <div className="card-container">
          <div className="card">
            <div className="image-container">
              <img src="Images/doctor2.png" alt="Doctor Image" />
            </div>
            <div className="content">
              <h2>Dr. ABC</h2>
              <h3>Specializes in: Ayurveda</h3>
              <h3>Experience: 5 years</h3>
              <button>Book An Appointment</button>
            </div>
          </div>

          {/* Repeat this card structure for other doctors */}

        </div>
      </div>
    </div>
  );
}

export default Doctors;
