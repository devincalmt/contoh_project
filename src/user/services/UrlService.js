let apiDomain = ''

apiDomain = 'http://localhost:8000/';

class UrlService {
    static loginUrl() {
        return apiDomain + 'api/login';
    }
}

export default UrlService;