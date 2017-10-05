import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getProduct,
  resetProduct,
  addProductForCart,
  removeProductFromCart
} from '../actions';

class ProductCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: -1
    };
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleChange(e) {
    const productId = e.target.value;
    if (productId > 0) {
      this.props.getProduct(this.props.cartId, productId);
    } else {
      this.props.resetProduct(this.props.cartId);
    }
    this.setState({ selectValue: productId });
  }

  getOptions() {
    const { products, cart } = this.props;
    const usedIds = Object.values(cart)
      .filter(value => {
        return value.id !== this.state.selectValue;
      })
      .map(value => value.id);
    return products
      .filter(product => {
        return !usedIds.includes(product.id);
      })
      .map(product => (
        <option key={product.id} value={product.id}>
          {product.label}
        </option>
      ));
  }

  render() {
    const { cart, cartId } = this.props;
    const currentCart = cart[cartId];

    return (
      <div className="product-cart">
        <div className="product-cart-image">
          <img
            alt=""
            src={
              currentCart
                ? currentCart.image
                : 'https://dummyimage.com/150x150/FFF/757575.png&text=IMG'
            }
          />
        </div>
        <div className="product-cart-title">Title Lorem ipsum dolor sit</div>
        <div className="product-cart-description">
          Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in
          pede pharetra quis non et.
        </div>
        <div className="product-cart-select">
          <select value={this.state.selectValue} onChange={this.handleChange}>
            <option value={-1}>Choose product</option>
            {this.getOptions()}
          </select>
        </div>
        <div className="product-cart-trash">[TRASH]</div>
        <div className="product-cart-usability">
          <div className="product-cart-changes">
            <button
              disabled={
                currentCart
                  ? currentCart.quantity === currentCart.min_quantity
                  : true
              }
              onClick={() => this.props.removeProductFromCart(cartId)}
            >
              -
            </button>
            <span>
              {currentCart ? currentCart.quantity : ' '}$
            </span>
            <button
              disabled={
                currentCart
                  ? currentCart.quantity === currentCart.max_quantity
                  : true
              }
              onClick={() => this.props.addProductForCart(cartId)}
            >
              +
            </button>
          </div>
          <div className="product-cart-cost">
            {currentCart ? currentCart.cost : ' '}$
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};

export default connect(mapStateToProps, {
  getProduct,
  resetProduct,
  addProductForCart,
  removeProductFromCart
})(ProductCart);
