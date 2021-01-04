import axios from 'axios';
import HandleStorage from './handleStorage';

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:8000",
            withCredentials: true
        });
    }

    async signup(name, email, password) {
        const data = await this.service.post('/api/user/signup', {
                name,
                email,
                password
            })

        if(data.status === 201) {
            HandleStorage.setStorage(data.data, "user");
            HandleStorage.setStorage(data.data["auth_token"], "token");
        }
        
        return data;
    }

    async info() {
        const header = {"Authorization": HandleStorage.getStorage()["token"]}
        const data = await this.service.get('/api/user/profile', {headers: header})
        
        if(data.status === 200) {
            HandleStorage.setStorage(data.data, "user");
        }
    
        return data;
    }

    async login(email, password) {
        const data = await this.service.post('/api/auth/login', {
                email,
                password
            })
        if(data.status === 200) {
            HandleStorage.setStorage(data.data["auth_token"], "token");    
        }

        const confirmation = await this.info()

        if(confirmation.status !== 200)
            return false;
            
        return data;
    }

    async saveFavorite(favorites) {
        const header = {"Authorization": HandleStorage.getStorage()["token"]}
        const data = await this.service.patch('/api/user/favorites', {
            favorites: favorites.id,
        }, {headers: header})

        if(data.status === 200) {
            HandleStorage.setStorage(favorites, 'favorites');
            return true
        }
        
        return false
    }

    logout() {
        // return this.service.get('/api/user/logout')
        HandleStorage.clearStorage();
        return true;
    }
}

export default AuthService;