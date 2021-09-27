import axios from 'axios';

export const restClient = axios.create({
  baseURL: 'https://reqres.in/api/',
  timeout: 1000,
});
