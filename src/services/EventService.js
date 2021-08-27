import axios from 'axios';
import NProgress from 'nprogress';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
        Accept: 'Application/json',
        'Content-Type': 'Application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    NProgress.start();
    return config;
});

apiClient.interceptors.response.use((response) => {
    NProgress.done();
    return response;
});

export default {
    getEvents(per_page, page) {
        return apiClient.get('events?_limit=' + per_page + '&_page=' + page);
    },
    getEvent(id) {
        return apiClient.get(`events/${id}`);
    },
    postEvent(event) {
        return apiClient.post('events', event);
    },
};
