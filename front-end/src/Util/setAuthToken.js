import axios from 'axios';

export default function setAuthToken(token) {
  if (token) {
    localStorage.setItem('jwtToken', token);
    axios.defaults.headers.common['Authorization'] = `Basic ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}