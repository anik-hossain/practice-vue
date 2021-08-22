import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: false,
    headers: {
        Accept: 'Application/json',
        'Content-Type': 'Application/json',
    },
});

export default {
    getPosts() {
        return apiClient.get('/posts');
    },
    getPost(id){
        return apiClient.get(`/posts/${id}`)
    }
};
