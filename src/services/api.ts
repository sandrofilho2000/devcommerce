import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-devcommerce-production.up.railway.app/',
});
