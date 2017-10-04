import React, { Component } from 'react';

const ProductCart = (props) => {
  return (
    <div className="product-cart">
      <div className="product-cart-image">IMAGE</div>
      <div className="product-cart-title">Title Lorem ipsum dolor sit</div>
      <div className="product-cart-description">
        Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede
        pharetra quis non et.
      </div>
      <div className="product-cart-select">
        <select>
        </select>
      </div>
      <div className="product-cart-trash"></div>
      <div className="product-cart-usability">
        <div className="product-cart-changes"></div>
        <div className="product-cart-cost"></div>
      </div>
    </div>
  );
};

export default ProductCart;
