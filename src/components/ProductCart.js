import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductCart extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selectValue: -1,
    };

  }

  handleChange(e){
    console.log('changing value');
    this.setState({selectValue:e.target.value});
  }

  render(){
    const { products } = this.props;

    return (
      <div className="product-cart">
        <div className="product-cart-image"><img alt="" src={false ? '...' : 'https://dummyimage.com/150x150/FFF/757575.png&text=IMG' }/></div>
        <div className="product-cart-title">Title Lorem ipsum dolor sit</div>
        <div className="product-cart-description">
          Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede
          pharetra quis non et.
        </div>
        <div className="product-cart-select">
          <select value={this.state.selectValue} onChange={this.handleChange.bind(this)}>
            <option value={-1}></option>  
            {products.map(product => <option key={product.id} value={product.id} >{product.label}</option>)}
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
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    // cart: state.cart
  };
};

export default connect(mapStateToProps, {})(ProductCart);
