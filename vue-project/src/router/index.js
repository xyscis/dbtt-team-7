import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/HomePage.vue'
import PassengerManagement from "@/components/PassengerManagement.vue";
import LiveChat from "@/components/LiveChat.vue";
import Login  from "@/components/Login.vue";
import FlightReassignment from "@/components/FlightReassignment.vue";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/passengermanagement',
        name: 'PassengerManagement',
        component: PassengerManagement
    },
    {
        path: '/livechat',
        name: 'LiveChat',
        component: LiveChat
    },
    {
        path: '/flightreassignment',
        name: 'FlightReassignment',
        component: FlightReassignment
    }
    


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;