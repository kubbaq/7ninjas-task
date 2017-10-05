import { combineReducers } from 'redux';

import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer'; 

const rootReducer = combineReducers({
  products: ProductReducer,
  cart:CartReducer
});

export default rootReducer;