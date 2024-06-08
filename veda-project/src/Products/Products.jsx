import React from 'react';
import './products.css';
import productsData from './products.json';

function Products() {
  return (
    <div>
      <header>
        <h1>Shop Healthy!</h1>
      </header>

      <div className="container">
        {productsData.products.map(product => (
          <div className="card" key={product.id}>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="content">
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
