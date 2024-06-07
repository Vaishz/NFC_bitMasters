import React from 'react';
import './books.css';

// Import images
import Book1Image from './Images/book1.jpg';
import Book2Image from './Images/book2.jpg';
import Book3Image from './Images/book3.jpg';
import Book4Image from './Images/book4.jpg';
import Book5Image from './Images/book5.jpg';
import Book6Image from './Images/book6.jpg';
import Book7Image from './Images/book7.jpg';
import Book8Image from './Images/book8.jpg';
import Book9Image from './Images/book9.jpg';

const Books = () => {
    const books = [
        {
            imgSrc: Book1Image,
            description: "The ideas are explained clearly, and there are several instances of how to recognize balance and imbalance in the body. There are a lot of practical suggestions for getting back into balance.",
            link: "https://www.amazon.in/Ayurveda-Science-Healing-Practical-Guide-ebook/dp/B001TH78SK"
        },
        {
            imgSrc: Book2Image,
            description: "This book delves further into Ayurveda, focusing on its physical, mental, and emotional aspects. There are also numerous tests for assessing physical and mental constitutions, which add a deeper layer of insight into the workings of the mind from an Ayurvedic perspective.",
            link: "https://www.amazon.in/Ayurveda-Mind-Consciousness-David-Frawley/dp/812082010X"
        },
        {
            imgSrc: Book3Image,
            description: "This book is for individuals who want to learn about the usage and effects of various plants. It combines Eastern wisdom and Ayurvedic knowledge with Western science.",
            link: "https://www.amazon.in/Chopra-Center-Herbal-Handbook-Prescriptions/dp/0609803905"
        },
        {
            imgSrc: Book4Image,
            description: "This is an excellent book to use for self-care as well as when helping others if one have a background in massage or acupuncture or a strong interest in how the body responds to physical contact.",
            link: "https://www.amazon.in/Ayurveda-Marma-Therapy-Energy-Healing/dp/0940985594"
        },
        {
            imgSrc: Book5Image,
            description: "Focusing on the many stages of a woman's life, there is also much of beneficial and practical advice. This is an accessible and interesting book for people with a little or a lot of Ayurvedic expertise.",
            link: "https://www.amazon.in/Ayurveda-Women-Medicine-Recipes-Wellness/dp/0593436148"
        },
        {
            imgSrc: Book6Image,
            description: "There are an increasing number of Ayurvedic recipe books available these days, and this one is especially simple to follow and comprehend due to its Western influence.",
            link: "https://www.amazon.in/Everyday-Ayurveda-Cookbook-Seasonal-Eating/dp/1611802296"
        },
        {
            imgSrc: Book7Image,
            description: "A comprehensive book that includes nutrition and lifestyle instructions, as well as seasonal guidance. Tips are offered to fit each person's dosha (mind and body type), and the Illnesses and Remedies A-Z section takes up a substantial chunk of the book.",
            link: "https://www.amazon.in/COMPLETE-AYURVEDIC-HOME-REMEDIES-Vasant/dp/0749927658"
        },
        {
            imgSrc: Book8Image,
            description: "This book refers to the fundamental concepts that underpin the Ayurvedic perspective on life. It goes through the fundamentals in greater depth and with additional vocabulary.",
            link: "https://www.amazon.in/Practical-Approach-Science-Ayurveda-Comprehensive/dp/9385436236"
        },
        {
            imgSrc: Book9Image,
            description: "The book goes into further detail on Ayurveda's understanding of the illness process. It is intended for advanced students and focuses on the diagnostic aspect of the disease as well as the disease process.",
            link: "https://www.amazon.in/CLINICAL-DIAGNOSIS-Practical-Ayurvedic-Diagnosis/dp/8189580930"
        }
    ];

    return (
        <div className="books-container">
            {books.map((book, index) => (
                <div className="books-card" key={index}>
                    <div className="books-card-front">
                        <div className="books-card-front-image">
                            <img src={book.imgSrc} alt={`Book ${index + 1}`} />
                        </div>
                    </div>
                    <div className="books-card-back">
                        <div className="books-card-back-image">
                            <p>{book.description}</p>
                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                <button id="books-btn">Buy Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Books;
