import axios from 'axios';


export default function loin(username, password) {
    return axios.post('/api/login', {
        username,
        password,
    })
        .then(response => response.data)
        .catch(error => {
            console.error('Login failed:', error);
            throw error;
        });
}