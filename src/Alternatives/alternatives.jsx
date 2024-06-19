import React from 'react';
import './alternatives.css';

import alt1 from './images/alt1.jpg';
import alt2 from './images/alt2.jpg';
import alt3 from './images/alt3.jpg';
import alt4 from './images/alt4.jpg';
import alt5 from './images/alt5.webp';
import alt6 from './images/alt6.jpg';
import alt7 from './images/alt7.webp';
import alt8 from './images/alt8.webp';
import alt9 from './images/alt9.jpeg';
import alt10 from './images/alt10.jpg';
import alt11 from './images/alt11.jpeg';
import alt12 from './images/alt12.webp';
import alt13 from './images/alt13.jpg';
import alt14 from './images/alt14.jpg';
import alt15 from './images/alt15.webp';

import alo1 from './images/alo1.webp';
import alo2 from './images/alo2.jpg';
import alo3 from './images/alo3.jpg';
import alo4 from './images/alo4.webp';
import alo5 from './images/alo5.jpg';
import alo6 from './images/alo6.jpeg';
import alo7 from './images/alo7.jpg';
import alo8 from './images/alo8.webp';
import alo9 from './images/alo9.jpg';
import alo10 from './images/alo10.jpg';
import alo11 from './images/alo11.webp';
import alo12 from './images/alo12.jpg';
import alo13 from './images/alo13.webp';
import alo14 from './images/alo14.png';
import alo15 from './images/alo15.png';

const imageMap = {
    'alt1.jpg': alt1,
    'alt2.jpg': alt2,
    'alt3.jpg': alt3,
    'alt4.jpg': alt4,
    'alt5.jpg': alt5,
    'alt6.jpg': alt6,
    'alt7.jpg': alt7,
    'alt8.jpg': alt8,
    'alt9.jpg': alt9,
    'alt10.jpg': alt10,
    'alt11.jpg': alt11,
    'alt12.jpg': alt12,
    'alt13.jpg': alt13,
    'alt14.jpg': alt14,
    'alt15.webp':alt15,
    'alo1.webp': alo1,
    'alo2.jpg': alo2,
    'alo3.jpg': alo3,
    'alo4.webp': alo4,
    'alo5.jpg': alo5,
    'alo6.jpeg': alo6,
    'alo7.jpg': alo7,
    'alo8.webp': alo8,
    'alo9.jpg': alo9,
    'alo10.jpg': alo10,
    'alo11.webp': alo11,
    'alo12.jpg': alo12,
    'alo13.webp': alo13,
    'alo14.png': alo14,
    'alo15.png':alo15
};

const Alternatives = () => {
    return (
        <div className="alt_container">
            {[
                {
                    dontChoose: "Dettol",
                    dontChooseImage: alo1,
                    choose: "Turmeric",
                    chooseImage: alt1
                },
                {
                    dontChoose: "Digeston Heath-aid",
                    dontChooseImage: alo2,
                    choose: "Himalaya Trikatu Digestive Tablets",
                    chooseImage: alt2
                },
                {
                    dontChoose: "Haemoglow Blood Purifier",
                    dontChooseImage: alo3,
                    choose: "Neem Ayurvedic Capsules Blood Purifier",
                    chooseImage: alt3
                },
                {
                    dontChoose: "Relent Cold Syrup",
                    dontChooseImage: alo4,
                    choose: "Ayurvedic Expectorant Cough Syrup",
                    chooseImage: alt4
                },
                {
                    dontChoose: "Livolin Forte",
                    dontChooseImage: alo5,
                    choose: "Ginger",
                    chooseImage: alt5
                },
                {
                    dontChoose: "Digoxin Tablets",
                    dontChooseImage: alo6,
                    choose: "Arjun-Chaal",
                    chooseImage: alt6
                },
                {
                    dontChoose: "Digene Acidity Syrup",
                    dontChooseImage: alo7,
                    choose: "Isabgol Powder",
                    chooseImage: alt7
                },
                {
                    dontChoose: "Biotin Hair Gummies",
                    dontChooseImage: alo8,
                    choose: "Bhringraj & Shikaka",
                    chooseImage: alt8
                },
                {
                    dontChoose: "ShelCal 500",
                    dontChooseImage: alo9,
                    choose: "Amla",
                    chooseImage: alt9
                },
                {
                    dontChoose: "Nerve Plus Tablets",
                    dontChooseImage: alo10,
                    choose: "Saraswatharishtam",
                    chooseImage: alt10
                },
                {
                    dontChoose: "Redness Reliever Drops",
                    dontChooseImage: alo11,
                    choose: "Triphala Kashaya",
                    chooseImage: alt11
                },
                {
                    dontChoose: "Riffway Weightloss Tablets",
                    dontChooseImage: alo12,
                    choose: "Wheatgrass",
                    chooseImage: alt12
                },
                {
                    dontChoose: "DERMOSPA SKIN Cream",
                    dontChooseImage: alo13,
                    choose: "Chandan Lepa",
                    chooseImage: alt13
                },
                {
                    dontChoose: "Panadol Period Pain Tablets",
                    dontChooseImage: alo14,
                    choose: "Gynoveda Irregular Periods Medicine",
                    chooseImage: alt14
                },
                {
                    dontChoose: "Vogroz Diabetes Tablets",
                    dontChooseImage: alo15,
                    choose: "Diabza Tablets",
                    chooseImage: alt15

                }
            ].map((item, index) => (
                <div className="alt_card" key={index}>
                    <div className="alt_card-inner">
                        <div className="alt_card-front">
                            <h2>Don't Choose This</h2>
                            <div className="alt_card-front-image">
                                <img src={item.dontChooseImage} alt={item.dontChoose} />
                            </div>
                            <h2>{item.dontChoose}</h2>
                        </div>
                        <div className="alt_card-back">
                            <h2>Choose This</h2>
                            <div className="alt_card-back-image">
                                <img src={item.chooseImage} alt={item.choose} />
                            </div>
                            <h2>{item.choose}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Alternatives;
