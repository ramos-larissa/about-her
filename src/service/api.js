import axios from "axios";

const api = axios.create({
    baseURL: "https://us-central1-squid-apis.cloudfunctions.net"
});

export default api;

