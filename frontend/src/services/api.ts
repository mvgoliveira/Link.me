import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'application/json'
    }
});

export { api }