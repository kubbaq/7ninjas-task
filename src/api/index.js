import fetch from 'isomorphic-fetch';
import 'es6-promise';

const API_URL =
  'http://59d4adc75803340011fd5f65.mockapi.io/7ninjas/api/v1/products';

export const fetchProducts = () => {
  return fetch(`${API_URL}`).then(response => {

    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }

    return response.json();
  });
};

export const fetchProduct = id => {
  return fetch(`${API_URL}/${id}`).then(response => {
    
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    
    return response.json();
  });
};
