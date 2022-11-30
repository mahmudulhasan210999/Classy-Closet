import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/index.vue'
import Contact from '../views/contact/index.vue'
import About from '../views/about/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router