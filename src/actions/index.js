import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  RESET_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
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

export const addProductForCart = (cartId) => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    cartId
  });
};

export const removeProductFromCart = (cartId) => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    cartId
  });
};
