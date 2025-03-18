import axios from 'axios';

// Create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: ' https://assignment-task-backend-rateup.vercel.app/api', 
});

export default axiosInstance;