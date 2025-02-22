import axios from 'axios';
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});


http.interceptors.request.use(function (config) {
  const xToken = sessionStorage.getItem('x_csrf_token') || '';
  config.headers['X-CSRF-TOKEN'] = xToken;
  return config;
}, function (error) {
  return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
  if ((`${response.status}`).startsWith('2')) {
    return response;
  }
  if ((`${response.status}`).startsWith('5')) {
    return Promise.reject(response);
  }
  return response;
}, function (error) {
  if (error.response && error.response.status === 401) {

    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default http;