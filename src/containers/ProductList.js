import React from 'react';
import ProductCart from '../components/ProductCart';

class ProductLsit extends React.Component{
  componentDidMount(){

  }

  render(){
    return <div className="content">
      <ProductCart />
      <ProductCart />
      <ProductCart />
    </div>;
  }
}

export default ProductLsit;