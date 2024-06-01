import axios from "axios";

// Need this to send token in cookie
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5050";

export default axios;
