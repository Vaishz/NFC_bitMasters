import React from 'react';
import './vata.css';
import Vata1 from './Images/vata-1.jpg';
import Vata2 from './Images/vata-2.jpg';
import Vata3 from './Images/vata-3.png';
import Vata4 from './Images/vata-4.jpg';
import Vata5 from './Images/vata-5.png';

const VataBodyType = () => {
    return (
        <div className="vata">
            <div className="vai-div">
            <div className="font-effect-emboss">
                <h1>The Vata Body-Type</h1><br />
            </div>

            <div className="vata-image">
                <img src={Vata3} alt="Vata" />
            </div>

            <img src={Vata5} id="vataflow" alt="Vata Flow" />
            <div className="oinfo">
                <p>Those who are born with more of the space and air element have a vata constitution. Vata constitution is governed by the features of space and air. Generally, a vata person will be very thin, more talkative, restless; they typically have a lower body weight, dry skin, brittle nails, thin hair, and small, slightly sunken eyes. While walking, their joints may make sounds. In terms of climate, they tend to prefer warm or hot weather; they may have trouble tolerating the cold. They have a hard time gaining weight, so they tend to be thin with a low weight. Vata is located in the abdomen below the navel; including the colon, pelvis, pelvic organs besides thighs, skin, ears, nervous system, and lungs. It is responsible for movement in the body and mind. Sensory impulses, breath, excretion, speech, and pumping of blood are some of its main functions. It also ignites agni, the digestive fire in the body.</p>
            </div>

            <div className="info">
                <div className="signs">
                    <h2>Signs of Vata Imbalance :</h2><br />
                    <ul>
                        <li>Dryness and roughness of skin</li><br />
                        <li>Irregular bowel movement or constipation</li><br />
                        <li>Too much weight loss. Emaciation happens.</li><br />
                        <li>Pain in bones, joints</li><br />
                        <li>Flatulence</li><br />
                        <li>Fear and restlessness</li><br />
                        <li>Abnormal pulse rate</li><br />
                        <li>Palpitation</li>
                    </ul>
                </div>
                <div className="problem">
                    <h2>Problems caused due to Vata Imbalance :</h2>
                    <ul>
                        <li>Dryness</li><br />
                        <li>Insomnia</li><br />
                        <li>Headaches</li><br />
                        <li>Tinnitus</li><br />
                        <li>Loose teeth</li><br />
                        <li>Facial Paralysis</li><br />
                        <li>Acute stress</li><br />
                        <li>Tonic and Clonic Seizures</li>
                    </ul>
                </div>
            </div>

            <div className="additional-images">
                <img src={Vata2} alt="Vata 2" />
                <img src={Vata1} alt="Vata 1" />
                <img src={Vata4} alt="Vata 4" />
            </div>
            </div>
        </div>
    );
};

export default VataBodyType;
