import axios from 'axios';
import qs from 'query-string';
import { APP_PASSWORD, APP_USERNAME, BASE_URL_AUTH } from '../../config/utils';
import { Buffer } from 'buffer/'
window.Buffer = Buffer;//buffer.Buffer;
const BASE_URL = BASE_URL_AUTH

export const loginUser = async (userData) => {
    console.log(userData);
    console.log('Proceso para generar token');
    console.log(APP_USERNAME);
    console.log(APP_PASSWORD);
    console.log(Buffer.from(`${APP_USERNAME}:${APP_PASSWORD}`, 'UTF8'));
    const token = Buffer.from(`${APP_USERNAME}:${APP_PASSWORD}`, 'UTF8').toString('base64');
    console.log(token);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${token}`
        }
    }
    userData = { ...userData, grant_type: 'password' }
    try {
        const response = await axios.post(`${BASE_URL}/token`, qs.stringify(userData), config);
        const token = response.data.access_token;
        const claims = window.atob(token.split('.')[1]);
        const user = { nombres: claims.nombre, apellidos: claims.apellidos, email: claims.email };
        console.log(token);
        return response;
    } catch (error) {
        console.log(error);
    }
}