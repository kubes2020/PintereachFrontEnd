import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        // REPLACE THIS WITH THE CORRECT API URL
        baseURL: 'http://localhost:5000/api',
        headers: {
            authorization: token
        }
    })
    
}