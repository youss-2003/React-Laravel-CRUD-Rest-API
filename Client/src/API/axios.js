import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api', // Update this to match your Laravel backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});
