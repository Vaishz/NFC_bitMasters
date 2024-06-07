import React from 'react';
import './aboutus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';

class AboutUs extends React.Component {
    componentDidMount() {
        new Typed('#title', {
            strings: ['About Us'],
            typeSpeed: 50,
        });
    }

    render() {
        return (
            <div className="card-container">
                <div id="title"></div>

                <div className="card">
                    <div className="card-img-container">
                        <img src="Images/Vaishnavi.jpg" alt="Vaishnavi" />
                    </div>
                    <div className="details">
                        <h2>Name: Vaishnavi Poti</h2>
                        <br />
                        <h3>Age: 19</h3>
                        <br />
                        <h4>Hobbies: Singing</h4>
                        <h5>
                            <a href="https://github.com/Vaishz" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} id="v-git" />
                            </a>
                            <a href="https://www.linkedin.com/in/vaishnavi-poti" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} id="v-link" />
                            </a>
                            <a href="mailto:vaishnavi@example.com">
                                <FontAwesomeIcon icon={faEnvelope} id="v-mail" />
                            </a>
                        </h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img-container">
                        <img src="Images/ash.jpeg" alt="Ashmit" />
                    </div>
                    <div className="details">
                        <h2>Name: Ashmit Srivastava</h2>
                        <br />
                        <h3>Age: 19</h3>
                        <br />
                        <h4>Hobbies: Reading</h4>
                        <h5>
                            <a href="https://github.com/Ashmit" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} id="a-git" />
                            </a>
                            <a href="https://www.linkedin.com/in/ashmit-srivastava" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} id="a-link" />
                            </a>
                            <a href="mailto:ashmit@example.com">
                                <FontAwesomeIcon icon={faEnvelope} id="a-mail" />
                            </a>
                        </h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img-container">
                        <img src="Images/druve.jpeg" alt="Dhruv" />
                    </div>
                    <div className="details">
                        <h2>Name: Dhruv Tater</h2>
                        <br />
                        <h3>Age: 19</h3>
                        <br />
                        <h4>Hobbies: Gaming</h4>
                        <h5>
                            <a href="https://github.com/Dhruv" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} id="d-git" />
                            </a>
                            <a href="https://www.linkedin.com/in/dhruv-tater" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} id="d-link" />
                            </a>
                            <a href="mailto:dhruv@example.com">
                                <FontAwesomeIcon icon={faEnvelope} id="d-mail" />
                            </a>
                        </h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img-container">
                        <img src="Images/shewta.jpeg" alt="Shweta" />
                    </div>
                    <div className="details">
                        <h2>Name: Shweta Sidhwani</h2>
                        <br />
                        <h3>Age: 19</h3>
                        <br />
                        <h4>Hobbies: Drawing</h4>
                        <h5>
                            <a href="https://github.com/Shweta" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} id="s-git" />
                            </a>
                            <a href="https://www.linkedin.com/in/shweta-sidhwani" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} id="s-link" />
                            </a>
                            <a href="mailto:shweta@example.com">
                                <FontAwesomeIcon icon={faEnvelope} id="s-mail" />
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
