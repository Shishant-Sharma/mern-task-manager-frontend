import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-manager-backend-zy8o.onrender.com/api"
});

export default api;
