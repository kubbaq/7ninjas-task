import axios from 'axios';

const API_URL =
  'https://59d4adc75803340011fd5f65.mockapi.io/7ninjas/api/v1/products';

export const fetchProducts = () => {
  return axios.get(`${API_URL}`);
};

export const fetchProduct = id => {
  return axios.get(`${API_URL}/${id}`);
};
