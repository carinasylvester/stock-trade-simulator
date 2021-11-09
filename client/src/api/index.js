import axios from 'axios';

// Axios Instance
const api = axios.create({ baseURL: process.env.REACT_APP_STOCKS_API });

// User information and authentication
export const register = (formInput) => api.post('/user/register', formInput);
export const login = (formInput) => api.post('/user/login', formInput);
export const userInfo = () => api.get('/user/userinfo');
export const updateUsername = (formInput) => api.patch('/user/username', formInput);
export const removeUser = () => api.delete('/user/removeuser');

//logs
export const fetchLogs = () => api.get('/logs');
