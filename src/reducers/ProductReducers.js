import { FETCH_PRODUCTS } from '../constants/ActionTypes';


const initialState = [];

export default function (state = initialState, action){
  switch(action.type){
  case FETCH_PRODUCTS:
    return action.payload;
  default:
    return state;
  }
}