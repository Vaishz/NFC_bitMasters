import React from 'react';
import './skin.css';

function Skin() {
  return (
    <div>
      <div className="skin-bg-image"></div>
      <div className="skin-bg-text">
        <h1 id="skin-h1">Skin-types</h1>
        <p>and their ayurvedic remedies</p>
      </div>
      <br /><br /><br />
      <div id="skin-content">
        <h2 className='skin-h2'>Understanding your Ayurvedic skin type:</h2><br />
        <div id="skin-intro">
          Ayurveda has been practised for millennia, and it is founded on the idea that the human body is guided by
          three
          Doshas: Vata, Pitta, and Kapha. According to Ayurveda, how the Doshas are balanced at any particular time
          determines
          every biological function of the body as well as your Ayurvedic skin type. Each person's Vata, Pitta, and
          Kapha
          doshas are balanced differently, and each person's Vata, Pitta, and Kapha balance is unique. Ayurvedic skin
          treatments are mostly centred on determining the body's Dosha type before recommending a treatment plan that
          includes habits, nutrition, and other factors. The Doshas must be balanced in order for the various organs
          and
          the body as a whole to operate properly. The Dosha also deciphers skin issues, as it does with other Ayurvedic
          therapies. Let's have a look at how each Dosha affects the skin in different ways.
          </div>
        <br /><br /><div className="skin-content-sec">
        <h2 className='skin-h2'>The Different Body Types:</h2><br />
        <div id="skin-bodytypes">
          <div id="skin-type">
            <h4>Vata Dosha</h4><br />
            With vata skin type, the skin is more likely to be rough and dry, requiring regular moisturising. Moisturisers
            with a certain amount of oil in them perform wonderfully for this skin type. For this skin condition,
            Ashwagandha supplements are also indicated.
          </div>
          <br /><br />
          <div id="skin-type">
            <h4>Pitta Dosha</h4><br />
            The pitta skin type is diametrically opposed to that of a Vata-dominant Dosha. When Pitta is the
            dominant Dosha,
            the person's skin might be greasy, and they are more susceptible to allergies and a range of skin disorders.
            Cooling treatments, such as Sandalwood, Aloe Vera, should be utilised on this type of skin.
          </div>
          <br /><br />
          <div id="skin-type">
            <h4>Kapha Dosha</h4><br />
            The Kapha skin type is quite similar to that of a Pitta person. Oily skin is prone to acne and other skin
            concerns. This skin type benefits greatly from exfoliation. There are different names which are more common
            that one might be aware of. Following are the simplified and popular terms for these skin types.
            </div>
          </div>
        </div>
        <br /><br />
        <div className="skin-content-sec">
        <h2 className='skin-h2'>Use these ayurvedic remedies:</h2><br /><br />
        <div id="skin-remedies">
          <div id="skin-type">
            <h4>Exfoliate your skin using natural ingredients</h4><br />
            Exfoliation is necessary for maintaining healthy and clean skin. Fruit acids are commonly used as chemical
            exfoliants, while Ayurvedic scrubs and masks can be used as physical exfoliants. Salt works well as a natural
            exfoliator. When it comes to a healthy body exfoliation, salt is a great alternative since it helps to remove
            the rough and dry patches of dead skin. Sugar is frequently used to exfoliate the skin. Choosing sugar over
            salt to avoid the sting is the greatest option.
            <a href="https://www.amazon.in/ayurvedic-face-scrub-for-women/s?k=ayurvedic+face+scrub+for+women" target="_blank">
              <button className="skin-btn">Buy Now</button>
            </a>
          </div>
          <br />
          <div id="skin-type">
            <h4>Nourish your skin with herbal oils</h4><br />
            Herbal oils contain natural properties that improve the health of your skin, promote moisture, and aid in the
            removal of blemishes. Some oils may even help you to get rid of significant skin problems including eczema,
            psoriasis, and acne. Because of its soothing and healing properties, ayurvedic oils can help reduce stress,
            which can harm your skin.
          </div>
          <br />
          <div id="skin-type">
            <h4>Use Kumkumadi Oil</h4><br />
            The vital Ayurvedic oil - Kumkumadi Oil, also known as Kumkumadi Tailam, is used for dermatological reasons.
            Ayurvedic skin care herbs and essential oils are used to make this unique oil. It has both medicinal and
            aesthetic advantages on the skin, with no negative side effects. Kumkumadi oil also functions as a toner,
            cleanser, and moisturizer in addition to enhancing skin nourishment.
            </div>
          <br />
          <a href="https://www.amazon.in/s?k=kumkumadi+face+oil+for+glowing+skin&crid=2ND7CK0A5578Y&sprefix=kumkum%2Caps%2C216&ref=nb_sb_ss_ts-doa-p_1_6" target="_blank">
            <button className="skin-btn">Buy Now</button>
          </a>
          <div id="skin-type">
            <h4>Use Winsoria Oil</h4>
            Winsoria Oil has been proved extremely effective in reducing symptoms of hyperkeratinization, inflammatory
            reactions, silvery scales, as well as skin discoloration associated with Psoriasis. Winsoria oil
            Phyto-ingredients, i.e., Manjishta, Vidapala, and Sariba blended together with a foundation made with
            coconut oil, helps in avoiding skin itching and also puts a stop to sores and scale development.

            Psoriasis is a skin condition in which the patient's skin turns red, rashes appear, and plaques with scales
            appear. Psoriasis can be treated using Winsoria oil. The anti-inflammatory properties of the Winsoria oil
            prevent the treated area from drying out. Psoriasis of any kind can be treated with Winsoria oil.
          </div>
          <br />
          <a href="https://www.amazon.in/s?k=winsoria+oil&crid=G3G8EP9YN3BZ&sprefix=winsoria%2Caps%2C208&ref=nb_sb_ss_ts-doa-p_3_8" target="_blank">
            <button className="skin-btn">Buy Now</button>
          </a>
          </div>
        </div>
      </div>
      <div id="skin-amazon"></div>
    </div>
  );
}

export default Skin;
