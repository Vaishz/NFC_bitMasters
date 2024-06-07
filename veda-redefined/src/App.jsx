import React from 'react';

const App = () => {
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
                <link
                    href="https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="index.css" />

                <title>Veda Redefined</title>
            </head>
            <body>
                <nav className="navbar">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="#">Services </a>
                            <ul className="dropdown1">
                                <li>
                                    <a href="Yoga/Yoga.html" target="_blank">
                                        Yoga
                                    </a>
                                </li>
                                <li>
                                    <a href="Map/massageMap.html">Massages</a>
                                </li>
                                <li>
                                    <a href="Books/books.html" target="_blank">
                                        Books
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="Alternatives/alternatives.html">
                                Alternatives{' '}
                            </a>
                        </li>
                        <li>
                            <a href="Products/products.html">Products</a>
                        </li>
                        <li className="dropdown-trigger">
                            <a>Contact Us</a>
                            <ul className="dropdown1">
                                <li>
                                    <a href="Whatis.html">What is Ayurveda</a>
                                </li>
                                <li>
                                    <a href="CustomerExp.html">
                                        Customer Experiences
                                    </a>
                                </li>
                                <li>
                                    <a href="doctor.html">Contact Doctors</a>
                                </li>
                                <li>
                                    <a href="Aboutus/aboutus.html">
                                        About Creators
                                    </a>
                                </li>
                                <li>
                                    <a href="body-types/diseases.html">
                                        Know More
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
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

                <footer>
                    <div className="maincontainer">
                        <div className="row">
                            <div className="cols">
                                <img src="Images/logo.png" alt="logo" className="logo" />
                                <div className="content">
                                    "Veda Redefined" is a website dedicated to offering
                                    Ayurvedic alternatives and solutions to modern
                                    pharmaceutical drugs.
                                </div>
                            </div>
                            <div className="cols">
                                <h4>
                                    Browse!{' '}
                                    <div className="underline">
                                        <span></span>
                                    </div>
                                </h4>
                                <ul>
                                    <li>
                                        <a target="_blank" href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="Alternatives/alternatives.html"
                                        >
                                            Alternatives
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="Products/products.html"
                                        >
                                            Products
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="body-types/diseases.html"
                                        >
                                            Diseases
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="Aboutus/aboutus.html"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="cols">
                                <h4>
                                    Socialize!{' '}
                                    <div className="underline">
                                        <span></span>
                                    </div>
                                </h4>
                                <ul>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://10times.com/india/ayurveda-herbal"
                                        >
                                            Events
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="Books/books.html"
                                        >
                                            Books
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.pinterest.com.au/livayurvedasydney/_created/"
                                        >
                                            Pinterest
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://disboard.org/server/897138844422537336"
                                        >
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="cols">
                                <h4>
                                    Know{' '}
                                    <div className="underline">
                                        <span></span>
                                    </div>
                                </h4>
                                <ul>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.udemy.com/course/ayurveda-for-balanced-lifestyle-master-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_82569850245_._ad_533220805577_._kw__._de_c_._dm__._pl__._ti_dsa-41729884224_._li_1007785_._pd__._&matchtype=&gclid=EAIaIQobChMIobyUoJiugQMVh9V3Ch3OegfeEAAYASAAEgKc1PD_BwE"
                                        >
                                            Courses
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://health.economictimes.indiatimes.com/tag/ayurveda"
                                        >
                                            News
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.keralaayurveda.biz/blog"
                                        >
                                            Blogs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="Yoga/Yoga.html"
                                        >
                                            Yoga
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copy">
                    <h2>© [2023] bitMasters. All Rights Reserved.</h2>
                </div>
            </body>
            <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
            <script src="index.js"></script>
            </html>
        </>
    );
};

export default App;
