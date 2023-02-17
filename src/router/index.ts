import {createRouter,createWebHistory} from "vue-router";
import Home from'@/view/Home/Home.vue'
import Login from'@/view/Login/index.vue'
import Dashboard from'@/view/Dashboard/dashboard.vue'
const routes=[
    {path:'/',component:Home},
    {path:'/login',component:Login},
    {path:'/dashboard', name:'dashboard',component:Dashboard}
]
const router =createRouter({
    history:createWebHistory(),
    routes,
})
// 配置前置路由守卫
router.beforeEach((to   ,from   ,next   )=>{
   if (to.name !='login') {
       if (!localStorage.getItem('token')) {
           next({
               path: '/login',
           })
       }
   }
   next();

});
export default router;