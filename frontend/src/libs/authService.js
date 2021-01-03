import axios from 'axios';

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:8000",
            withCredentials: true
        });
    }

    signup(name, email, password) {
        return this.service.post('/api/user/signup', {
                name,
                email,
                password
            })
            .then(response => response.data)
    }

    info() {
        return this.service.get('/api/user/profile')
            .then(response => {return response.data})
    }

    login(email, password) {
        return this.service.post('/api/auth/login', {
                email,
                password
            })
            .then(response => response.data)
    }

    logout() {
        return this.service.get('/api/user/logout')
    }
}

export default AuthService;