import React from 'react';
import './books.css';

const Books = () => {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap" rel="stylesheet" />
                <title>Books</title>
            </head>
            <body>
                <nav className="navbar">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Services </a>
                            <ul className="dropdown1">
                                <li><a href="/Yoga/Yoga.html" target="_blank">Yoga</a></li><br />
                                <li><a href="/Map/massageMap.html" target="_blank">Massages</a></li><br />
                                <li><a href="/Books/books.html" target="_blank">Books</a></li><br />
                            </ul>
                        </li>
                        <li><a href="/Alternatives/alternatives.html">Alternatives</a></li>
                        <li><a href="/Products/products.html">Products</a></li>
                        <li className="dropdown-trigger"><a>Contact Us</a>
                            <ul className="dropdown1">
                                <li><a href="/Whatis.html">What is Ayurveda</a></li><br />
                                <li><a href="/CustomerExp.html">Customer Experiences</a></li><br />
                                <li><a href="/doctor.html">Contact Doctors</a></li><br />
                                <li><a href="/Aboutus/aboutus.html">About Creators</a></li><br />
                                <li><a href="diseases.html">Know More</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    {[
                        {
                            imgSrc: "Images/book1.jpg",
                            description: "The ideas are explained clearly, and there are several instances of how to recognize balance and imbalance in the body. There are a lot of practical suggestions for getting back into balance.",
                            link: "https://www.amazon.in/Ayurveda-Science-Healing-Practical-Guide-ebook/dp/B001TH78SK"
                        },
                        {
                            imgSrc: "Images/book2.jpg",
                            description: "This book delves further into Ayurveda, focusing on its physical, mental, and emotional aspects. There are also numerous tests for assessing physical and mental constitutions, which add a deeper layer of insight into the workings of the mind from an Ayurvedic perspective.",
                            link: "https://www.amazon.in/Ayurveda-Mind-Consciousness-David-Frawley/dp/812082010X"
                        },
                        {
                            imgSrc: "Images/book3.jpg",
                            description: "This book is for individuals who want to learn about the usage and effects of various plants. It combines Eastern wisdom and Ayurvedic knowledge with Western science.",
                            link: "https://www.amazon.in/Chopra-Center-Herbal-Handbook-Prescriptions/dp/0609803905"
                        },
                        {
                            imgSrc: "Images/book4.jpg",
                            description: "This is an excellent book to use for self-care as well as when helping others if one have a background in massage or acupuncture or a strong interest in how the body responds to physical contact.",
                            link: "https://www.amazon.in/Ayurveda-Marma-Therapy-Energy-Healing/dp/0940985594"
                        },
                        {
                            imgSrc: "Images/book5.jpg",
                            description: "Focusing on the many stages of a woman's life, there is also much of beneficial and practical advice. This is an accessible and interesting book for people with a little or a lot of Ayurvedic expertise.",
                            link: "https://www.amazon.in/Ayurveda-Women-Medicine-Recipes-Wellness/dp/0593436148"
                        },
                        {
                            imgSrc: "Images/book6.jpg",
                            description: "There are an increasing number of Ayurvedic recipe books available these days, and this one is especially simple to follow and comprehend due to its Western influence.",
                            link: "https://www.amazon.in/Everyday-Ayurveda-Cookbook-Seasonal-Eating/dp/1611802296"
                        },
                        {
                            imgSrc: "Images/book7.jpg",
                            description: "A comprehensive book that includes nutrition and lifestyle instructions, as well as seasonal guidance. Tips are offered to fit each person's dosha (mind and body type), and the Illnesses and Remedies A-Z section takes up a substantial chunk of the book.",
                            link: "https://www.amazon.in/COMPLETE-AYURVEDIC-HOME-REMEDIES-Vasant/dp/0749927658"
                        },
                        {
                            imgSrc: "Images/book8.jpg",
                            description: "This book refers to the fundamental concepts that underpin the Ayurvedic perspective on life. It goes through the fundamentals in greater depth and with additional vocabulary.",
                            link: "https://www.amazon.in/Practical-Approach-Science-Ayurveda-Comprehensive/dp/9385436236"
                        },
                        {
                            imgSrc: "Images/book9.jpg",
                            description: "The book goes into further detail on Ayurveda's understanding of the illness process. It is intended for advanced students and focuses on the diagnostic aspect of the disease as well as the disease process.",
                            link: "https://www.amazon.in/CLINICAL-DIAGNOSIS-Practical-Ayurvedic-Diagnosis/dp/8189580930"
                        }
                    ].map((book, index) => (
                        <div className="card" key={index}>
                            <div className="card-front">
                                <br />
                                <div className="card-front-image">
                                    <img src={book.imgSrc} alt={`Book ${index + 1}`} />
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="card-back-image">
                                    {book.description}
                                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                                        <button id="btn">Buy Now</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </body>
        </div>
    );
};

export default Books;
