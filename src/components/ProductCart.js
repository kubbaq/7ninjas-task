import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct, resetProduct } from '../actions';

class ProductCart extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selectValue: -1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const productId = e.target.value;
    if(productId > 0){
      this.props.getProduct(this.props.cartId,productId);
    }else{
      this.props.resetProduct(this.props.cartId);
    }
    this.setState({selectValue:productId});
  }

  render(){
    const { products, cart, cartId } = this.props;

    return (
      <div className="product-cart">
        <div className="product-cart-image"><img alt="" src={false ? '...' : 'https://dummyimage.com/150x150/FFF/757575.png&text=IMG' }/></div>
        <div className="product-cart-title">Title Lorem ipsum dolor sit</div>
        <div className="product-cart-description">
          Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede
          pharetra quis non et.
        </div>
        <div className="product-cart-select">
          <select value={this.state.selectValue} onChange={this.handleChange}>
            <option value={-1}>Choose product</option>  
            {products.map(product => <option key={product.id} value={product.id} >{product.label}</option>)}
          </select>
        </div>
        <div className="product-cart-trash">[TRASH]</div>
        <div className="product-cart-usability">
          <div className="product-cart-changes">
            <button>-</button>
            <span>{cart[cartId] ? cart[cartId].quantity : 'nothing to show'}</span>
            <button>+</button>
          </div>
          <div className="product-cart-cost">{cart[cartId] ? cart[cartId].cost : ''}</div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart
  };
};

export default connect(mapStateToProps, {getProduct, resetProduct})(ProductCart);
