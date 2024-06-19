import React from 'react'
import { NavLink } from 'react-router-dom';
import './body_type.css';

const Body_types = () => {
  return (
    <>
      <div className="bts">
        <div className="bts-cards">
          <div className="bts-card">
            <NavLink to="/vata">Vata</NavLink>
            <div className="bts-description">
              <p>Characteristics: Dry, light, cool, and irregular</p>
            </div>
          </div>
          <div className="bts-card">
            <NavLink to="/pitta">Pitta</NavLink>
            <div className="bts-description">
              <p>Characteristics: Hot, intense, sharp, and acidic</p>
            </div>
          </div>
          <div className="bts-card">
            <NavLink to="/kapha">Kapha</NavLink>
            <div className="bts-description">
              <p>Characteristics: Heavy, slow, steady, and soft</p>
            </div>
          </div>
        </div>
        <div className="bts-content">
          <h2>About Vata</h2>
          <p>Vata is characterized by movement and change. It is responsible for all motion in the body and mind, including the movements of the breath, heartbeat, and nerve impulses. People with a Vata constitution tend to be energetic, creative, and adaptable, but they may also experience issues like anxiety, insomnia, and digestive disturbances when out of balance.</p>
          
          <h2>About Pitta</h2>
          <p>Pitta is associated with heat and transformation. It governs digestion, metabolism, and energy production in the body. Individuals with a Pitta constitution are often strong-willed, intelligent, and ambitious. However, when imbalanced, they may struggle with irritability, inflammation, and digestive issues.</p>
          
          <h2>About Kapha</h2>
          <p>Kapha is linked to structure and stability. It provides the body with physical form and maintains immunity and endurance. Those with a Kapha constitution are typically calm, nurturing, and grounded. But, an excess of Kapha can lead to weight gain, lethargy, and congestion.</p>
        </div>
      </div>
    </>
  )
}

export default Body_types
