import Axios, { AxiosInstance } from 'axios';

const API_URL = 'https://newsapi.org/v2';
const API_KEY = '8db856d00dd14f3fafa95a23d395962a';

const request: AxiosInstance = Axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Key': API_KEY,
    },
});

export default request;