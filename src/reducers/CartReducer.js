import { FETCH_PRODUCT, RESET_PRODUCT } from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
  case FETCH_PRODUCT:
    const {cartId, payload} = action;
    const cart = {};
    cart[cartId] = payload;
    cart[cartId].cost = cart[cartId].min_quantity * cart[cartId].price;
    cart[cartId].quantity = cart[cartId].min_quantity;
    console.log(Object.assign({}, state, cart));
    
    return Object.assign({}, state, cart);
  case RESET_PRODUCT:
    return _.pick(
      state,
      Object.keys(state).filter(key => key !== cartId)
    );
  default:
    return state;
  }
}
