import React from 'react';
import './kapha.css'; 
import Kapha1 from './Images/kapha-1.png'
import Kapha2 from './Images/kapha-2.png'

const KaphaBodyType = () => {
    return (
        <div className="kapha-body"> {/* Apply the prefixed class to the main container */}
            <div className="kapha-header">
                <h1>The Kapha Body-Type</h1>
            </div>

            <div className="kapha-images">
                <img src={Kapha1} id="kapharot" alt="Kapha Rotation" />
                <img src={Kapha2} id="kaphaman" alt="Kapha Man" />
            </div>

            <div className="kapha-intro">
                <p><i>Kapha indicates a preponderance of the water and earth element. People with this kapha constitution are generally cool, calm, lazy, cheerful, stocky.</i></p>
            </div>

            <div className="kapha-description">
                <p>Ayurveda says that because a kapha person is the least bothered, happiest type of person on the whole planet, the best constitution is kapha. They're cheerful all the time! Other qualities include a thick build, thick, dark hair, big eyes with white around, and prominent, shiny, white teeth. The skin may also be thick, moist, and a little cool to the touch.</p>
            </div>

            <div className="kapha-location">
                <p>Location of Kapha is in bones, muscles, and tendons. It acts as the 'binding agent' to keep the cells together. It keeps the body moist. It lubricates joints, moisturizes the skin, and maintains immunity. In balance, kapha is synonymous to love, calmness, and forgiveness. If out of balance it can be the cause of negative emotions like greed and jealousy.</p>
            </div>

            <div className="kapha-signs">
                <h2>Signs of Kapha Imbalance :</h2>
                <ul>
                    <li>Anorexia</li>
                    <li>Drowsiness</li>
                    <li>Respiratory disorders</li>
                    <li>Goitre</li>
                    <li>Hardening of blood vessels</li>
                    <li>Flu</li>
                    <li>Bronchitis</li>
                </ul>
            </div>

            <div className="kapha-problems">
                <h2>Problems caused due to Kapha Imbalance :</h2>
                <ul>
                    <li>Dryness</li>
                    <li>Insomnia</li>
                    <li>Headaches</li>
                    <li>Tinnitus</li>
                    <li>Acute stress</li>
                </ul>
            </div>
        </div>
    );
};

export default KaphaBodyType;
