import React from 'react';
import './pitta.css';
import Pitta1 from './Images/pita-1.png'
import Pitta2 from './Images/pita-2.png'

const PittaBodyType = () => {
    return (
        <div className="pitta-container">
            <header className="pitta-header">
                <h1>The Pitta Body-Type</h1>
            </header>
            <div className="pitta-images">
                <img src={Pitta1} id="pitarot" alt="Pitta Rotation" />
                <img src={Pitta2} id="pitaman" alt="Pitta Man" />
            </div>
            <main className="pitta-content">
                <div className="pitta-intro">
                    <i>The pitta people are those who are born with hotter constitutions, containing more of the fire element.</i>
                </div>
                <div className="pitta-description">
                    <p>A pitta person is generally active, good looking, a perfectionist, dynamic, intelligent and also short-tempered. They may have leadership qualities, a moderate build, a smart personality, a sharp nose, and their eyes will also be sharp, sometimes offset with a slight pinkish tint. Due to the unfortunate ease with which a pitta person gets imbalanced, hair loss and early greying are common. They are generally slightly warm to the touch with rosy lips and pink nails with a slight curve.</p>
                    <p>It is responsible for stability in the body and mind. It regulates body heat, digestion, lightens the appetite, absorption, assimilation, gives vitality, and the ability to understand. It nourishes the body by carrying amino acids and enzymes which are important for digestion of food. It also keeps neurotransmitters and neuropeptides which are responsible for thinking.</p>
                </div>
                <div className="pitta-signs">
                    <h2>Signs of Pitta Imbalance :</h2>
                    <ul>
                        <li>Excessive heat marked by desire for cold things</li>
                        <li>Yellow coloration of the skin</li>
                        <li>Giddiness</li>
                        <li>Increased anger and agitation</li>
                        <li>Increased tendency of being a perfectionist</li>
                    </ul>
                </div>
                <div className="pitta-problems">
                    <h2>Problems caused due to Vata Imbalance :</h2>
                    <ul>
                        <li>Peptic ulcers, inflammation of the stomach or esophagus, if the imbalance is allowed to persist for too long</li>
                        <li>Skin disorders like eczema, psoriasis</li>
                        <li>Acid Reflux Tendonitis</li>
                        <li>Pharyngitis</li>
                        <li>Redness of the skin</li>
                        <li>Low blood sugar</li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default PittaBodyType;
