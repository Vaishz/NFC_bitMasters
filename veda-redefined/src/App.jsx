import React, { useEffect } from 'react';
import './App.css'; 
import Typed from 'typed.js';

const MyComponent = () => {
    useEffect(() => {
        
        const typed = new Typed('#type', {
            strings: [
                'feeling constantly fatigued?',
                'struggling with chronic pain?',
                'endless doctor appointments?',
                'medications with side effects?',
                'feeling stressed and anxious?',
                'Insomnia?',
                'digestive issues?',
                'low vitality?'
            ],
            typeSpeed: 50,
            backSpeed: 100,
            loop: true
        });

        // Clean up Typed instance on unmount
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array ensures useEffect runs only once after mount

    return (
        <>
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link rel="stylesheet" href="index.css" />

                <title>Veda Redefined</title>
            </head>
            <body>
                <nav className="navbar">
                    {/* Navigation content */}
                </nav>

                <div className="head-1">
                    <h1>
                        Are you tired of <span id="type"></span>
                    </h1>
                </div>

                <div className="head-2">
                    <div className="image-container">
                        <img src="Images/bg-1.jpg" alt="background" />
                    </div>
                    <h2>
                        SWITCH TO <span>AYURVEDA!</span>
                    </h2>
                </div>

                <h2 id="ans">Here's why you should too:</h2>
                <div className="reasons">
                    {/* Reasons content */}
                </div>

                <footer>
                    {/* Footer content */}
                </footer>
                <div className="copy">
                    <h2>© [2023] bitMasters. All Rights Reserved.</h2>
                </div>

                {/* Script tags */}
                <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
                <script src="index.js"></script>
            </body>
            </html>
        </>
    );
};

export default MyComponent;
