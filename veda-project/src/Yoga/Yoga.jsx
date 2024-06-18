import React from 'react';
import './yoga.css';
import Balasana from './Balasana.jpg'
import Navasana from './Navasana.jpg'
import Bharadvajasana from './Bharadvajasana.jpg'
import Dhanurasana from './Dhanurasana.jpg'
import Paschimottanasana from './Paschimottanasana.jpg'
import PrasaritaPadottanasana from './PrasaritaPadottanasana.jpg'
import RevolvedTrianglePose from './Revolved-Triangle-Pose.webp'
import Virabhadrasana from './Virabhadrasana.jpg'
import UrdhvaDhanurasana from './UrdhvaDhanurasana.jpg'

function Yoga() {
  return (<>
   <div className="yoga-heading">Yoga</div>
    <div className="yoga-container">
   
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={RevolvedTrianglePose} alt="Trikonasana" />
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Trikonasana</h4>
          <ul>
            <li>Relieves mild back pain</li>
            <li>Improves breathing</li>
            <li>Improves sense of balance</li>
          </ul>
        </div>
      </div>
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={Virabhadrasana} alt="Virabhadrasana" />
          <a href="https://www.youtube.com/watch?v=yxNtoOJ9500" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Virabhadrasana</h4>
          <ul>
            <li>Strengthens your core</li>
            <li>Enhances back muscles</li>
            <li>Improves gluteal muscles</li>
          </ul>
        </div>
      </div>
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={Balasana}  />
          <a href="https://www.youtube.com/watch?v=yxNtoOJ9500" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Balasana</h4>
          <ul>
            <li>Helps to manage stress</li>
            <li>Activates the relaxation response</li>
            <li>Helps regulate blood pressure</li>
          </ul>
        </div>
      </div>
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={Paschimottanasana} alt="Paschimottanasana" />
          <a href="https://www.youtube.com/watch?v=yxNtoOJ9500" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Paschimottanasana</h4>
          <ul>
            <li>Stretches entire back body</li>
            <li>Enhances the calf muscles, hamstrings</li>
            <li>Enforces the muscles along the spine</li>
          </ul>
        </div>
      </div>
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={PrasaritaPadottanasana} alt="Prasarita Padottanasana" />
          <a href="https://www.youtube.com/watch?v=yxNtoOJ9500" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Padottanasana</h4>
          <ul>
            <li>Stretches hamstrings, calves, and hips</li>
            <li>Builds awareness of protecting your lower back</li>
          </ul>
        </div>
      </div>
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={UrdhvaDhanurasana} alt="Urdhva Dhanurasana" />
          <a href="https://www.youtube.com/watch?v=yxNtoOJ9500" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Urdhva Dhanurasana</h4>
          <ul>
            <li>Eases back pain</li>
            <li>Stretches your abdomen</li>
            <li>Strengthens back muscles</li>
          </ul>
        </div>
      </div>
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={Dhanurasana} alt="Dhanurasana" />
          <a href="https://www.youtube.com/watch?v=yxNtoOJ9500" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Dhanurasana</h4>
          <ul>
            <li>Stimulates the adrenal glands</li>
            <li>Increases blood flow to your digestive system</li>
            <li>Counteracts slouching and kyphosis</li>
          </ul>
        </div>
      </div>
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={Navasana} alt="Paripurna Navasana" />
          <a href="https://www.youtube.com/watch?v=yxNtoOJ9500" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Paripurna Navasana</h4>
          <ul>
            <li>Builds focus and body awareness</li>
            <li>Improves posture and counteracts the effects of prolonged sitting</li>
          </ul>
        </div>
      </div>
      <div className="yoga-card">
        <div className="yoga-image">
          <img src={Bharadvajasana} alt="Bharadvajasana" />
          <a href="https://www.youtube.com/watch?v=yxNtoOJ9500" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="yoga-content">
          <h4 className='yoga-card-title'>Bharadvajasana</h4>
          <ul>
            <li>Improves postural and body awareness</li>
            <li>Stimulates proper digestion</li>
          </ul>
        </div>
      </div>
    </div>
    </>  );
}

export default Yoga;
