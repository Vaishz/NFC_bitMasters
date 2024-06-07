import React from 'react';
import './massageMap.css';

function MassageMap() {
    return (
        <div>

            <div className="container">
                <div className="bgimg">
                    <img src="bg-2.jpg" alt="Background Image" />
                </div>
                <div id="map">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1Ig5EA1rAzjN2TeItgCtsqcSYifeEVsU&ehbc=2E312F"
                        width="640" height="480" title="Google Maps"></iframe>
                </div>
                <div className="instructions">
                    <h1>Instructions to Use: </h1>
                    <h2>
                        Step 1: Find your location on the map<br />
                        Step 2: Find the required location on the map shown above.<br />
                        Step 3: Select the required salon<br />
                        Step 4: Tap on the blue marker near your preferred location. This will display the address,
                        phone number, and the full name of the selected salon.<br />
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default MassageMap;
