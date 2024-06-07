import React from 'react';
import './yoga.css';

function Yoga() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="yoga.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lilita+One&family=Oswald:wght@600&family=Pacifico&family=REM&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="herbal1.png" />
        <title>Yoga</title>
      </head>
      <body>
        <nav class="navbar">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li>
              <a href="#">Services </a>
              <ul class="dropdown1">
                <li><a href="/Yoga/Yoga.html" target="_blank">Yoga</a></li><br />
                <li><a href="/Map/massageMap.html" target="_blank">Massages</a></li><br />
                <li><a href="/Books/books.html" target="_blank">Books</a></li><br />
              </ul>
            </li>
            <li><a href="/Alternatives/alternatives.html">Alternatives </a></li>
            <li><a href="/Products/products.html">Products</a></li>
            <li class="dropdown-trigger">
              <a>Contact Us</a>
              <ul class="dropdown1">
                <li><a href="/Whatis.html">What is Ayurveda</a></li><br />
                <li><a href="/CustomerExp.html">Customer Experiences</a></li><br />
                <li><a href="/doctor.html">Contact Doctors</a></li><br />
                <li><a href="/Aboutus/aboutus.html">About Creators</a></li><br />
                <li><a href="diseases.html">Know More</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="container">
          <div class="card">
            <div class="image">
              <img src="Revolved-Triangle-Pose.webp" />
            </div>
            <div class="content">
              <h4>Trikonasana</h4>
              <p>
                <li>Relieves mild back pain</li>
                <li>Improves breathing</li>
                <li>Improves sense of balance</li>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="Virabhadrasana.jpg" /><a href="https://www.youtube.com/watch?v=yxNtoOJ9500"></a>
            </div>
            <div class="content">
              <h4>Virabhadrasana</h4>
              <p>
                <li>Strengthens your core</li>
                <li>Enhances back muscles</li>
                <li>Improves gluteal muscles</li>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="Balasana.jpg" /><a href="https://www.youtube.com/watch?v=yxNtoOJ9500"></a>
            </div>
            <div class="content">
              <h4>Balasana</h4>
              <p>
                <li>Helps to manage stress</li>
                <li>Activates the relaxation response</li>
                <li>Helps regulate blood pressure</li>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="Paschimottanasana.jpg" /><a href="https://www.youtube.com/watch?v=yxNtoOJ9500"></a>
            </div>
            <div class="content">
              <h4>Paschimottanasana</h4>
              <p>
                <li>Stretches entire back body</li>
                <li>Enhances the calf muscles, hamstrings</li>
                <li>Enforces the muscles along the spine</li>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="Prasarita Padottanasana.jpg" /><a href="https://www.youtube.com/watch?v=yxNtoOJ9500"></a>
            </div>
            <div class="content">
              <h4>Prasarita Padottanasana</h4>
              <p>
                <li>Stretches hamstrings, calves, and hips</li>
                <li>Builds awareness of protecting your lower back</li>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="Urdhva Dhanurasana.jpg" /><a href="https://www.youtube.com/watch?v=yxNtoOJ9500"></a>
            </div>
            <div class="content">
              <h4>Urdhva Dhanurasana</h4>
              <p>
                <li>Eases back pain</li>
                <li>Stretches your abdomen</li>
                <li>Strengthens back muscles</li>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="Dhanurasana.jpg" /><a href="https://www.youtube.com/watch?v=yxNtoOJ9500"></a>
            </div>
            <div class="content">
              <h4>Dhanurasana</h4>
              <p>
                <li>Stimulates the adrenal glands</li>
                <li>Increases blood flow to your digestive system</li>
                <li>Counteracts slouching and kyphosis</li>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="Navasana.jpg" /><a href="https://www.youtube.com/watch?v=yxNtoOJ9500"></a>
</div>
<div class="content">
<h4>Paripurna Navasana</h4>
<p>
<li>Builds focus and body awareness</li>
<li>Improves posture and counteracts the effects of prolonged sitting</li>
</p>
</div>
</div>
<div class="card">
<div class="image">
<img src="Bharadvajasana.jpg" /><a href="https://www.youtube.com/watch?v=yxNtoOJ9500"></a>
</div>
<div class="content">
<h4>Bharadvajasana</h4>
<p>
<li>Improves postural and body awareness</li>
<li>Stimulates proper digestion</li>
</p>
</div>
</div>
</div>
</body>
</html>
);
}

export default Yoga;
