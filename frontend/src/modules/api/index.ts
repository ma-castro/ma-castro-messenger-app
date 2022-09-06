import axios from 'axios';
import config from '../config';

// eslint-disable-next-line prefer-destructuring
export const baseURL = config.baseURL;

export const axiosInstance = axios.create({ baseURL });
