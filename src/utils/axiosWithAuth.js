import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        // REPLACE THIS WITH THE CORRECT API URL
        baseURL: 'https://pintereacharticles.herokuapp.com/api/',
        headers: {
            authorization: token
        }
    })

}