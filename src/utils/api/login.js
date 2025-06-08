import axios from 'axios';

export const API_BASE_URL = 'http://localhost:8080';

export default function loin(username, password) {
    return axios.post(API_BASE_URL + '/user/login', {
        "email": username,
        "password": password
    })
        .then(response => response.data)
        .catch(error => {
            console.error('Login failed:', error);
            throw error;
        });
}