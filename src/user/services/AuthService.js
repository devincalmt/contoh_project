import axios from 'axios';
import UrlService from './UrlService'

class AuthService {
    async doUserLogin(credentials) {
        try {
            const response = await axios.post(UrlService.loginUrl(), credentials);
            return response.data;
        } catch (error) {
            console.error('Error', error.response)
            return false;
        }
    }
}

export default new AuthService; 