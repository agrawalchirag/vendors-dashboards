import Axios from 'axios';

export const generateBasicAuthConfig = (username, password) => ({
  auth: {
    username,
    password,
  },
});

export const getAuthorizationHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem('authToken')}`,
});   

let axios = Axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: getAuthorizationHeader(),
  }
});

export default axios;
