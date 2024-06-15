import React from 'react';
import './learn.css';

function Learn() {
  return (
      <body id='learn'>
        <div class="learn-container">
          <div id='learn-head'>
            WHAT IS AYRUVEDA
          </div>
          <div class="learn-p1">
            Ayurveda is a traditional system of medicine that has its roots in India and is one of the world's oldest holistic
            healing systems. The term "Ayurveda" is derived from the Sanskrit words "ayur," which means life, and "veda," which
            means science or knowledge. Therefore, Ayurveda can be translated as the "science of life" or the "knowledge of life."
            The central theoretical ideas of Ayurveda show parallels with Samkhya and Vaisheshika philosophies, as well as with
            Buddhism and Jainism. Ayurvedic practitioners regard physical existence, mental existence, and personality as three
            separate elements of a whole person with each element being able to influence the others. This holistic approach used
            during diagnosis and healing is a fundamental aspect of Ayurveda. Another part of Ayurvedic treatment says that there
            are channels (srotas) which transport fluids, and that the channels can be opened up by massage treatment using oils
            and Swedana (fomentation). Unhealthy, or blocked, channels are thought to cause disease.
          </div>
          <h2 className='learn-h2'>
            <b>Key principles and concepts of Ayurveda include:</b>
          </h2>
          <p className='learn-p2'>
            <ol>
              <li>
                Doshas: Ayurveda categorizes individuals into three primary constitutional types or doshas: Vata, Pitta, and
                Kapha. Each dosha is associated with specific physical, mental, and emotional traits. An individual's dosha
                makeup is believed to influence their health and well-being.
                <ul>
                  <li>Vata: Associated with the elements of air and space, Vata governs movements, creativity, and flexibility.</li>
                  <li>Pitta: Linked to the elements of fire and water, Pitta governs digestion, metabolism, and energy production.</li>
                  <li>Kapha: Related to the elements of earth and water, Kapha governs stability, strength, and immunity.</li>
                  <li>Prakriti and Vikriti: Prakriti refers to an individual's inherent or natural dosha constitution, while Vikriti
                    refers to the current state of imbalance or dosha disturbance in the body. Ayurveda seeks to restore the balance
                    between an individual's natural constitution (Prakriti) and their current state of health (Vikriti).</li>
                </ul>
              </li>
              <li>Ayurvedic Diagnosis: Ayurvedic practitioners use various methods to assess an individual's dosha constitution and
                current imbalances, including pulse diagnosis, tongue examination, and assessment of physical and mental attributes.
              </li>
              <li>Treatment Modalities: Ayurvedic treatments aim to restore balance and promote overall health. These treatments can
                include dietary changes, herbal remedies, detoxification (Panchakarma), yoga, meditation, and lifestyle modifications.
              </li>
              <li>Holistic Approach: Ayurveda views health as a holistic concept that encompasses physical, mental, and spiritual
                well-being. It emphasizes the importance of a harmonious balance between these aspects of life.</li>
            </ol>
            Personalized Care: Ayurveda believes that each individual is unique, and treatments are tailored to a person's specific
            constitution and imbalances.
            <br />
            Prevention: Ayurveda places a strong emphasis on disease prevention through healthy living, dietary choices, and daily
            routines that are in harmony with one's dosha constitution.
          </p>
        </div>
      </body>
  );
}

export default Learn;
