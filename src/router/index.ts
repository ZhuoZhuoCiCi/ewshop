import {createRouter,createWebHistory} from "vue-router";
import Home from'../view/Home/Home.vue'
import Login from'../view/Login/Login.vue'
const routes=[
    {path:'/',component:Home},
    {path:'/login',component:Login}
]
const router =createRouter({
    history:createWebHistory(),
    routes,
})
export default router;