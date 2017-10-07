import React, { Component } from 'react';
import ProductList from './ProductList';
import '../styles/containers/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-main">
          <div className="container-main-header">7ninjas</div>
          <div className="container-main-description">
            <div className="container-main-description-title">
              Front-End Developer<span style={{ color: 'red' }}>.</span>
            </div>
            <div>
              Our mission is to build market-leading, software-driven businesses
              by delivering outstanding value, continuous innovation and an
              exceptional customer-centric experience.
            </div>
          </div>
          <ProductList />
        </div>
        <div className="container-gap" />
        <div className="container-footer">
          <span className="container-footer-text">Do more with less</span>
          <div className="container-footer-img">
            <img alt=""  src="public/images/footer.png"/>
          </div>
        </div>
      </div>
    );
  }
}
