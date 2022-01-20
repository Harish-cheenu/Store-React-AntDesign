import axios from 'axios';
import { API_TIMEOUT, BASE_URL } from './apiConstant.js';

function createAxiosInstance(reqHeader, baseUrl = BASE_URL) {
  return axios.create({
    baseURL: baseUrl,
    timeout: API_TIMEOUT,
  });
}
export default createAxiosInstance;
