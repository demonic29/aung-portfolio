
import MainPageVue from "@/views/MainPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path : '/', name : "MainPage", component : MainPageVue},
    {path : '/about', name : 'AboutMe' , component : () => import ('@/views/AboutMe.vue')},
    {path : '/work' , name : 'Work' , component : () => import ('@/views/Work.vue')},
    {path : '/contact' , name : 'ContactMe' , component : () => import ('@/views/ContactMe.vue')},
    {path: '/notfound', name: 'NotFound', component: ()=> import('@/views/NotFound.vue')}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
