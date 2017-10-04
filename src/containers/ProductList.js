import React from 'react';
import {connect} from 'react-redux';
import ProductCart from '../components/ProductCart';
import { getProducts } from '../actions';

class ProductList extends React.Component{
  componentDidMount(){
    this.props.getProducts();
  }

  render(){
    return <div className="content">
      <ProductCart cartId={1} />
      <ProductCart cartId={2}/>
      <ProductCart cartId={3}/>
    </div>;
  }
}

export default connect(null, { getProducts })(ProductList);