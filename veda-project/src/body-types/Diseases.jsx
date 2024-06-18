import React from 'react';
import './diseases.css';

const Diseases = () => {
    return (
        <div>
            <div className="disease">
                <div className="h1" id="dis_title">
                    ASTHAMA
                </div>
                <div className="info">
                    Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways,
                    leading to symptoms such as shortness of breath, wheezing, coughing, and chest tightness. While there is no
                    known cure for asthma in conventional medicine, Ayurveda, a holistic system of medicine originating from
                    India, offers approaches that aim to manage and alleviate asthma symptoms. <br /><br />
                    Ayurveda offers holistic approaches to manage asthma symptoms:<br /><br />
                    <ul>
                    <li><b>Balancing Doshas:</b> Ayurveda aims to restore dosha balance through personalized dietary and lifestyle changes.</li>

                    <li><b>Breathing Techniques:</b> Pranayama exercises improve lung function and promote healthy breathing patterns.</li>

                    <li><b>Herbal Remedies:</b> Ayurvedic herbs like turmeric and ginger have anti-inflammatory properties to ease airway
                    inflammation.</li>

                    <li><b>Dietary Guidance:</b> Ayurveda recommends warm, easily digestible foods and avoids trigger foods.</li>

                    <li><b>Stress Reduction:</b> Stress-reduction techniques like meditation and yoga can help manage asthma triggers.</li>

                    <li><b>Detoxification:</b> Panchakarma detox therapies may remove toxins contributing to asthma.</li>
                    </ul>

                    <div id="dis_quote">Ayurveda doesn't promise a cure but can complement conventional asthma management. Consult a healthcare
                    professional before trying Ayurvedic treatments.</div><br />
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
