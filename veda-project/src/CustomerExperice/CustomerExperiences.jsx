import React from "react";
import "./CusomerExp.css";

function CustomerExperiences() {
  return (
    <div>

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
