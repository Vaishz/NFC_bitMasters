import React from 'react';
import './doctor.css';
import Doctor1 from "./doctor1.png"
import Doctor2 from "./doctor2.png"
import Doctor3 from "./doctor3.png"
const Doctor = () => {
    return (
        <>
            <body>
            <div className="dr_header">
                    <h1>Meet Our Doctors</h1>
            </div>
                <div className="dr_container">
                    
                    <div className="dr_card-container">
                        <div className="dr_card">
                            <div className="dr_image-container">
                                <img src={Doctor2} alt="Doctor Image" />
                            </div>
                            <div className="dr_content">
                                <h2>Dr. ABC</h2>
                                <h3>Specializes in: Ayurveda</h3>
                                <h3>Experience: 5 years</h3>
                                <button className='dr_btn'>Book An Appointment</button>
                            </div>
                        </div>
                        <div className="dr_card">
                            <div className="dr_image-container">
                                <img src={Doctor3} alt="Doctor Image" />
                            </div>
                            <div className="dr_content">
                                <h2>Dr. ABC</h2>
                                <h3>Specializes in: Ayurveda</h3>
                                <h3>Experience: 5 years</h3>
                                <button className='dr_btn'>Book An Appointment</button>
                            </div>
                        </div>
                        <div className="dr_card">
                            <div className="dr_image-container">
                                <img src={Doctor1} alt="Doctor Image" />
                            </div>
                            <div className="dr_content">
                                <h2>Dr. ABC</h2>
                                <h3>Specializes in: Ayurveda</h3>
                                <h3>Experience: 5 years</h3>
                                <button className='dr_btn'>Book An Appointment</button>
                            </div>
                        </div>
                        <div className="dr_card">
                            <div className="dr_image-container">
                                <img src={Doctor1} alt="Doctor Image" />
                            </div>
                            <div className="dr_content">
                                <h2>Dr. ABC</h2>
                                <h3>Specializes in: Ayurveda</h3>
                                <h3>Experience: 5 years</h3>
                                <button className='dr_btn'>Book An Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Doctor;
