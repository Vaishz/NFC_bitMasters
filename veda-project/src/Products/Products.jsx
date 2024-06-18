import React from 'react';
import './products.css';
import productsData from './products.json';

// Import images
import pr1 from './pr1.jpg';
import pr2 from './pr2.jpg';
import pr3 from './pr3.jpg';
import pr4 from './pr4.jpg';
import pr5 from './pr5.jpg';
import pr6 from './pr6.jpg';
import pr7 from './pr7.jpg';
import pr8 from './pr8.jpg';
import pr9 from './pr9.jpg';
import pr10 from './pr10.jpg';
import pr11 from './pr11.jpg';
import pr12 from './pr12.jpg';
import pr13 from './pr13.jpg';
import pr14 from './pr14.jpg';
import pr15 from './pr15.jpg';

const imageMap = {
  'pr1.jpg': pr1,
  'pr2.jpg': pr2,
  'pr3.jpg': pr3,
  'pr4.jpg': pr4,
  'pr5.jpg': pr5,
  'pr6.jpg': pr6,
  'pr7.jpg': pr7,
  'pr8.jpg': pr8,
  'pr9.jpg': pr9,
  'pr10.jpg': pr10,
  'pr11.jpg': pr11,
  'pr12.jpg': pr12,
  'pr13.jpg': pr13,
  'pr14.jpg': pr14,
  'pr15.jpg': pr15
};

function Products() {
  return (
    <div>
      <header>
        <h1>Shop Healthy!</h1>
      </header>

      <div className="prod-container">
        {productsData.products.map(product => (
          <div className="prod-card" key={product.id}>
            <div className="prod-image-container">
              <img src={imageMap[product.image]} alt={product.name} />
            </div>
            <div className="prod-content">
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
              <button>
                <a target="_blank" rel="noopener noreferrer" href={product.buyLink}>
                  Buy Now!
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
