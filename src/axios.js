import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://leadsmanager-backend.herokuapp.com/",
});

export default axiosInstance;
