import axios from 'axios';

const backendURL = 'http://localhost:5000';

const api = axios.create({
  baseURL: backendURL,
});

export const fetchUsers = () => {
  return api.get('/api/user');
};

export const fetchNews = () => {
  return api.get('/api/news');
};

export default api;
