import handleCatchError from './errorHandler.js';
import handleResponse from './responseHandler.js';
import {
     DELETE, GET, PATCH, POST, PUT,
    } from './apiConstant.js';
import createAxiosInstance from './instance.js';

const callApi = async (
  url,
  props = null,
  type = GET,
  data = {},
  customBaseUrl = null,
) => {
  const axiosInstance = createAxiosInstance(customBaseUrl);
  switch (type) {
    case GET:
      return axiosInstance
        .get(url)
        .then((response) => handleResponse(url, response, GET))
        .catch((err) => handleCatchError(url, err, props));

    case POST:
      return axiosInstance
        .post(url, data)
        .then((response) => handleResponse(url, response, POST))
        .catch((err) => handleCatchError(url, err, props));

    case PUT:
      return axiosInstance
        .put(url, data)
        .then((response) => handleResponse(url, response, PUT))
        .catch((err) => handleCatchError(url, err, props));

    case DELETE:
      return axiosInstance
        .delete(url)
        .then((response) => handleResponse(url, response, DELETE))
        .catch((err) => handleCatchError(url, err, props));

    case PATCH:
      return axiosInstance
        .patch(url, data)
        .then((response) => handleResponse(url, response, PATCH))
        .catch((err) => handleCatchError(url, err, props));
    default:
      return null;
  }
};
export default callApi;
