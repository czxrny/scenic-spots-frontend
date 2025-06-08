import axios from 'axios';

export const API_BASE_URL = 'http://localhost:8080';

export default function registerApi(email, username, password) {
    return axios.post(API_BASE_URL + '/user/register', {
        "name": username,
        "email": email,
        "password": password
    })
        .then(response => response.data)
        .catch(error => {
            console.error('Registration failed:', error);
            throw error;
        });
}