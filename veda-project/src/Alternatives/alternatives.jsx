import React from 'react';
import './alternatives.css';


const Alternatives = () => {
    return (
        <div className="container">
            {[
                {
                    dontChoose: "Dettol",
                    dontChooseImage: "images/alo1.webp",
                    choose: "Turmeric",
                    chooseImage: "images/alt1.jpg"
                },
                {
                    dontChoose: "Digeston Heath-aid",
                    dontChooseImage: "images/alo2.jpg",
                    choose: "Himalaya Trikatu Digestive Tablets",
                    chooseImage: "images/alt2.jpg"
                },
                {
                    dontChoose: "Haemoglow Blood Purifier",
                    dontChooseImage: "images/alo3.jpg",
                    choose: "Neem Ayurvedic Capsules Blood Purifier",
                    chooseImage: "images/alt3.jpg"
                },
                {
                    dontChoose: "Relent Cold Syrup",
                    dontChooseImage: "Images/alo4.webp",
                    choose: "Ayurvedic Expectorant Cough Syrup",
                    chooseImage: "Images/alt4.jpg"
                },
                {
                    dontChoose: "Livolin Forte",
                    dontChooseImage: "Images/alo5.jpg",
                    choose: "Ginger",
                    chooseImage: "Images/alt5.webp"
                },
                {
                    dontChoose: "Digoxin Tablets",
                    dontChooseImage: "Images/alo6.jpeg",
                    choose: "Arjun-Chaal",
                    chooseImage: "Images/alt6.jpg"
                },
                {
                    dontChoose: "Digene Acidity Syrup",
                    dontChooseImage: "Images/alo7.jpg",
                    choose: "Isabgol Powder",
                    chooseImage: "Images/alt7.webp"
                },
                {
                    dontChoose: "Biotin Hair Gummies",
                    dontChooseImage: "Images/alo8.webp",
                    choose: "Bhringraj & Shikaka",
                    chooseImage: "Images/alt8.webp"
                },
                {
                    dontChoose: "ShelCal 500",
                    dontChooseImage: "Images/alo9.jpg",
                    choose: "Amla",
                    chooseImage: "Images/alt9.jpeg"
                },
                {
                    dontChoose: "Nerve Plus Tablets",
                    dontChooseImage: "Images/alo10.jpg",
                    choose: "Saraswatharishtam",
                    chooseImage: "Images/alt10.jpg"
                },
                {
                    dontChoose: "Redness Reliever Drops",
                    dontChooseImage: "Images/alo11.webp",
                    choose: "Triphala Kashaya",
                    chooseImage: "Images/alt11.jpeg"
                },
                {
                    dontChoose: "Riffway Weightloss Tablets",
                    dontChooseImage: "Images/alo12.jpg",
                    choose: "Wheatgrass",
                    chooseImage: "Images/alt12.webp"
                },
                {
                    dontChoose: "DERMOSPA SKIN Cream",
                    dontChooseImage: "Images/alo13.webp",
                    choose: "Chandan Lepa",
                    chooseImage: "Images/alt13.jpg"
                },
                {
                    dontChoose: "Panadol Period Pain Tablets",
                    dontChooseImage: "Images/alo14.png",
                    choose: "Gynoveda Irregular Periods Medicine",
                    chooseImage: "Images/alt14.jpg"
                },
                {
                    dontChoose: "Vogroz Diabetes Tablets",
                    dontChooseImage: "Images/alo15.png",
                    choose: "Diabza Tablets",
                    chooseImage: "Images/alt15.webp"
                }
            ].map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-front">
                        <h2>Don't Choose This</h2>
                        <br />
                        <div className="card-front-image">
                            <img src={item.dontChooseImage} alt={item.dontChoose} />
                        </div>
                        <h2>{item.dontChoose}</h2>
                    </div>
                    <div className="card-back">
                        <h2>Choose This</h2>
                        <div className="card-back-image">
                            <img src={item.chooseImage} alt={item.choose} />
                        </div>
                        <h2>{item.choose}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Alternatives;
