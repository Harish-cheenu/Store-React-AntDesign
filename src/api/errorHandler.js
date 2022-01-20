import { UNKNOWN_ERROR } from './errorMessageConst.js';

const handleCatchError = (url, err, props) => {
  console.log('api call error --- ', url, err);
  console.log('error --- ', err);
  if (err?.response?.status === 401) {
    props.alert(true, err?.response?.data?.message, 'error');
  } else if (err.response.status === 404) {
    props.alert(true, err?.response?.data?.message, 'error');
  } else {
    props.alert(true, err?.response?.data?.message, 'error');
  }
  return Promise.reject(err?.response?.data ?? UNKNOWN_ERROR);
};
export default handleCatchError;
