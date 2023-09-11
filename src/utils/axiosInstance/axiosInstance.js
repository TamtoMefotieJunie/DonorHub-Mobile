import axios from "axios";


export default axiosInstance = axios.create({
    baseURL: "http://192.168.221.68:5000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})