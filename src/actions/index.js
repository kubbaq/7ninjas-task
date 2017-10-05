import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  RESET_PRODUCT
} from '../constants/ActionTypes';
import { fetchProducts, fetchProduct } from '../api';

export const getProducts = () => dispatch => {
  return fetchProducts().then(payload => {
    return dispatch({
      type: FETCH_PRODUCTS,
      payload
    });
  });
};

export const getProduct = (cartId,productId) => dispatch => {
  return fetchProduct(productId).then(payload => {
    return dispatch({
      type: FETCH_PRODUCT,
      cartId,
      payload
    });
  });
};

export const resetProduct = (cartId) => dispatch => {
  dispatch({
    type: RESET_PRODUCT,
    cartId
  });
};
