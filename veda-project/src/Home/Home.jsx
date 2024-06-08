import React, { useEffect } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {

  return (
    <>
      <div className="head-1">
        <h1>Are you tired of <span id="type">Fatigue</span></h1>
      </div>

      <div className="head-2">
        <div className="image-container">
          <img src="Images/bg-1.jpg" alt="Background"/>
        </div>
        <h2 className='switch_to'>SWITCH TO <span> AYURVEDA!</span></h2>
      </div>

      <h2 id="ans">Here's why you should too:</h2>
      <div className="reasons">
        <h1>Natural Healing</h1>
        <h1>Personalized Approach</h1>
        <h1>Minimal Side Effects</h1>
        <h1>Preventative Health</h1>
        <h1>Long-Term Solutions</h1>
        <h1>Improved Digestion</h1>
        <h1>Stress Reduction</h1>
        <h1>Enhanced Energy</h1>
        <h1>Cultural Heritage</h1>
        <h1>Holistic Wellness</h1>
      </div>

      
    </>
  );
}

export default Home;
