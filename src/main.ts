import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter,createWebHistory} from "vue-router";
import Home from'./view/Home/Home.vue'
import Login from'./view/Login/Login.vue'
const routes=[
    {path:'/',component:Home},
    {path:'/login',component:Login}
]
const router =createRouter({
    history:createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router)
    .mount('#app')
