import axios from 'axios';

export const BASE_URL = 'https://strapi.cleverland.by';

export const service = axios.create({
  baseURL: BASE_URL,
});
