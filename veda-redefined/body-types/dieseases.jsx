import React from 'react';
import './diseases.css';

const Diseases = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Services</a>
                        <ul className="dropdown1">
                            <li><a href="/Yoga/Yoga.html" target="_blank">Yoga</a></li><br />
                            <li><a href="/Map/massageMap.html" target="_blank">Massages</a></li><br />
                            <li><a href="/Books/books.html" target="_blank">Books</a></li><br />
                        </ul>
                    </li>
                    <li><a href="/Alternatives/alternatives.html">Alternatives</a></li>
                    <li><a href="/Products/products.html">Products</a></li>
                    <li className="dropdown-trigger"><a>Contact Us</a>
                        <ul className="dropdown1">
                            <li><a href="/Whatis.html">What is Ayurveda</a></li><br />
                            <li><a href="/CustomerExp.html">Customer Experiences</a></li><br />
                            <li><a href="/doctor.html">Contact Doctors</a></li><br />
                            <li><a href="/Aboutus/aboutus.html">About Creators</a></li><br />
                            <li><a href="diseases.html">Know More</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div className="bts">
                <div className="cards">
                    <div className="card">
                        <a href="vata.html">Vata</a>
                    </div>
                    <div className="card">
                        <a href="pitta.html">Pitta</a>
                    </div>
                    <div className="card">
                        <a href="kapha.html">Kapha</a>
                    </div>
                </div>
            </div>

            <div className="disease">
                <div className="h1" id="title">
                    ASTHAMA
                </div>
                <div className="info">
                    Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways,
                    leading to symptoms such as shortness of breath, wheezing, coughing, and chest tightness. While there is no
                    known cure for asthma in conventional medicine, Ayurveda, a holistic system of medicine originating from
                    India, offers approaches that aim to manage and alleviate asthma symptoms.
                    Ayurveda offers holistic approaches to manage asthma symptoms:<br />

                    Balancing Doshas: Ayurveda aims to restore dosha balance through personalized dietary and lifestyle changes.<br />

                    Breathing Techniques: Pranayama exercises improve lung function and promote healthy breathing patterns.<br />

                    Herbal Remedies: Ayurvedic herbs like turmeric and ginger have anti-inflammatory properties to ease airway
                    inflammation.<br />

                    Dietary Guidance: Ayurveda recommends warm, easily digestible foods and avoids trigger foods.<br />

                    Stress Reduction: Stress-reduction techniques like meditation and yoga can help manage asthma triggers.<br />

                    Detoxification: Panchakarma detox therapies may remove toxins contributing to asthma.<br />

                    Ayurveda doesn't promise a cure but can complement conventional asthma management. Consult a healthcare
                    professional before trying Ayurvedic treatments.<br />
                </div>

                <div className="videos">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WU5r73RdcE8?si=-Vb4Q3hzxZeBn3Lo"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0zFmLOjeR18?si=IJAT3l-qtNy3wK8C"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Diseases;
