import React from 'react';
import './doctor.css';

const Doctor = () => {
    return (
        <>
            <body>
            <div className="dr_header">
                    <h1>Meet Our Doctors</h1>
            </div>
                <div className="dr_container">
                    <div className="dr_bg-container">
                        <img src="Images/MedWP-1.jpg" id="bgimg" alt="Background" />
                    </div>
                    <div className="dr_card-container">
                        <div className="dr_card">
                            <div className="dr_image-container">
                                <img src="Images/doctor2.png" alt="Doctor Image" />
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
                                <img src="Images/doctor2.png" alt="Doctor Image" />
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
                                <img src="Images/doctor2.png" alt="Doctor Image" />
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
                                <img src="Images/doctor2.png" alt="Doctor Image" />
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
