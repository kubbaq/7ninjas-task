import React, { Component } from 'react';
import ProductList from './ProductList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">7ninjas</div>
        <div className="description">
          <h1>
            Front-End Developer<span style={{ color: 'red' }}>.</span>
          </h1>
          <div>
          Our mission is to build market-leading, software-driven businesses by
          delivering outstanding value, contunuous innovation, and an
          exceptional customer-centric experiece.
          </div>
        </div>
        <ProductList />
        <div className="gap">
        </div>
        <div className="footer">
        </div>
      </div>

    );
  }
}
