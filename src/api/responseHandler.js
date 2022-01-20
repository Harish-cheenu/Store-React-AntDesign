import { NO_DATA_FOUND } from './errorMessageConst.js';

function handleResponse(url, response, method) {
  if (response?.data) {
    console.log(
      'method--',
      method,
      ', Url--',
      url,
      ', response--',
      response.data,
    );
    return Promise.resolve(response.data);
  }
  return Promise.reject(NO_DATA_FOUND);
}
export default handleResponse;
