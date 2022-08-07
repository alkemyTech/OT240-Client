import axios from 'axios';

const ong_api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const fetchApi = async (method, url, data, params) => {
  const options = {
    method,
    url,
    data,
    params,
  };

  const authToken = sessionStorage.getItem('token');

  authToken && (options.headers = { Authorization: `Bearer ${authToken}` });

  return await ong_api(options);
};

export default fetchApi;
