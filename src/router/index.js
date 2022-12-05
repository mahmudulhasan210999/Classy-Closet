import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/index.vue'
import Products from '../views/products/index.vue'
import ProductDetails from '../views/products/product_details/[id].vue'
import Contact from '../views/contact/index.vue'
import About from '../views/about/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/product-details/:id',
        name: 'ProductDetails',
        component: ProductDetails
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
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return desired position
        if (savedPosition) return savedPosition
        else return { top: 0 }
    }
})

export default router