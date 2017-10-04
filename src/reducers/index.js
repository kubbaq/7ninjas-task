import { combineReducers } from 'redux';

import ProductReducers from './ProductReducers';

const rootReducer = combineReducers({
  products: ProductReducers
});

export default rootReducer;