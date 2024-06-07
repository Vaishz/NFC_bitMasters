import React from 'react';
import './products.css';

function Products() {
  return (
    <div>
      <header>
        <h1>Shop Healthy!</h1>
      </header>

      <div className="container">
        <div className="card">
          <div className="image-container">
            <img src="pr1.jpg" alt="Ambic Smart&Slim" />
          </div>
          <div className="content">
            <h5>Ambic Smart&Slim</h5>
            <p>Ambic Smart and Slim weightloss capsule</p>
            <h3>₹1,109</h3>
            <button><a target="_blank" href="https://www.amazon.in/Ayurvedic-Medicine-Management-Garcinia-Cambogia/dp/B0BRMXYFJK/ref=sr_1_6?keywords=ayurvedic%2Bmedicine%2Bfor%2Bweight%2Bloss&sr=8-6&th=1">Buy Now!</a></button>
          </div>
        </div>
        
        {/* Add other product cards here */}
      </div>
    </div>
  );
}

export default Products;
