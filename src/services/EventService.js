import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
        Accept: 'Application/json',
        'Content-Type': 'Application/json',
    },
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
