import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/HomePage.vue'
import PassengerManagement from "@/components/PassengerManagement.vue";
import LiveChat from "@/components/LiveChat.vue";
import Login  from "@/components/Login.vue";

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
    },
    {
        path: '/lc',
        name: 'LiveChat',
        component: LiveChat
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;