import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../views/home/home.vue"
import GoodsDetail from '../views/GoodsDetail/index.vue'
import Login from '../views/Login/index.vue'
 Vue.use(VueRouter)
 const router = new VueRouter({
     mode:"history",
     routes:[
         {
           path:'/Home',
           component:Home
         },
        //  {
        //     path:'/',
        //     component:Home
        //   },
          {
              path:'/GoodsDetail',
              component:GoodsDetail
          },
          {
              path:'/Login' ,
              component:Login
          }
     
     ]
 })
 export default router