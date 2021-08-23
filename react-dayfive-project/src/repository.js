import axios from "axios";


export function login(data) {
    return axios.get(`http://localhost:5001/users`)
        .then(response => {
            for (let user of response.data) {
                if (user.username === data.username && user.password === data.password) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('loginName', user.username);
                    alert('User LoggedIn.');
                    break;
                }
            }
        }).catch(error => {
            Promise.reject('Authentication Failed.')
        });
}

export function register(data) {
    console.log(data);
    return axios.post(`http://localhost:5001/users`, data)
        .then(() => {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loginName', data.username);
            alert('You are registered now.');
        })
        .catch(() => {
            Promise.reject('Authentication Failed.');
        })
}

export function isAuthenticated() {
    return localStorage.getItem('isLoggedIn') &&
        localStorage.getItem('loginName');

}