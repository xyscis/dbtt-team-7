import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/HomePage.vue'
import PassengerManagement from "@/components/PassengerManagement.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pm',
        name: 'PassengerManagement',
        component: PassengerManagement
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;