import {
  FETCH_PRODUCT,
  RESET_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = {};

function reduceFetchProduct(state, action) {
  const { cartId, payload } = action;
  const cart = {};
  cart[cartId] = payload;
  cart[cartId].cost = cart[cartId].min_quantity * cart[cartId].price;
  cart[cartId].quantity = cart[cartId].min_quantity;

  return Object.assign({}, state, cart);
}

function reduceResetProduct(state, action) {
  return _.pick(state, Object.keys(state).filter(key => key !== action.cartId));
}

function reduceAddToCart(state, action) {
  const cart = _.clone( state[action.cartId] , true);
  cart.cost += cart.price;
  cart.quantity++;
  const newState = {};
  newState[action.cartId] = cart;

  return Object.assign({}, state, newState);
}

function reduceRemoveFromCart(state, action) {
  const cart = _.clone( state[action.cartId] , true);
  cart.cost -= cart.price;
  cart.quantity--;
  const newState = {};
  newState[action.cartId] = cart;

  return Object.assign({}, state, newState);
}

export default function(state = initialState, action) {
  switch (action.type) {
  case FETCH_PRODUCT:
    return reduceFetchProduct(state, action);
  case RESET_PRODUCT:
    return reduceResetProduct(state, action);
  case ADD_TO_CART:
    return reduceAddToCart(state, action);
  case REMOVE_FROM_CART:
    return reduceRemoveFromCart(state, action);
  default:
    return state;
  }
}
