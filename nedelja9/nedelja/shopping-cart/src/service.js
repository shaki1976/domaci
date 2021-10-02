import axios from 'axios';

export const getAllProducts = () => axios.get(`http://localhost:3005/products`);
export const addProduct = (product) => axios.post(`http://localhost:3005/products`, product)