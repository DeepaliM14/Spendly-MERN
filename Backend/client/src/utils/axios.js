import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api/v1': '/api/v1',   
  //baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json"
  }
  //baseURL: 'http://localhost:8080/api/v1',
  //headers: {
    //'Content-Type': 'application/json',
  //},
   // match backend base URL
});

export default axiosInstance;
