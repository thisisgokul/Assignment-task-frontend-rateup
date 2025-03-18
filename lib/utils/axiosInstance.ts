import axios from 'axios';

// Create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: ' http://localhost:5000/api', 
});

export default axiosInstance;