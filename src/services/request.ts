import Axios, { AxiosInstance } from 'axios';

const API_URL = 'https://newsapi.org/v2';
const API_KEY = '9144d25a5a44494e8312b62f32bafc4a';

const request: AxiosInstance = Axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Key': API_KEY,
    },
});

export default request;