import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import EventDetails from '../views/EventDetails.vue';
import EventCreate from '../views/EventCreate.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/events/:id',
        name: 'EventDetails',
        component: EventDetails,
        props: true,
    },
    {
        path: '/events/create',
        name: 'EventCreate',
        component: EventCreate,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
