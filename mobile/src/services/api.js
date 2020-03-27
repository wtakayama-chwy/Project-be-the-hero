import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.102:3333' // Emulating app on your phone > use your IP from expo
});

export default api;