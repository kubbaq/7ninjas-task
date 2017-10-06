import React from 'react';
import { connect } from 'react-redux';
import {FaEur} from 'react-icons/lib/fa';
import ProductCart from '../components/ProductCart';
import { getProducts } from '../actions';
import '../styles/containers/ProductList.scss';

const cartIds = ['cart1','cart2','cart3'];

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  getTotalPrice() {
    const { cart } = this.props;
    return Object.values(cart).reduce((total, value) => {
      return total + value.cost;
    }, 0);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="container-main-content">
        {cartIds.map(cartId => <ProductCart key={cartId} cartId={cartId} />
        )}
        <div className="container-main-content-totalprice">{this.getTotalPrice()}<FaEur/></div>
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

export default connect(mapStateToProps, { getProducts })(ProductList);
