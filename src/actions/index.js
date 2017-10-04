import {START_FETCH_PRODUCTS, FETCH_PRODUCTS } from '../constants/ActionTypes';
import { fetchProducts } from '../api';

export const getProducts = () => dispatch =>{
  dispatch({
    type: START_FETCH_PRODUCTS
  });

  return fetchProducts().then(payload => {
    return dispatch({
      type: FETCH_PRODUCTS,
      payload
    });
  }); 
};