import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../views/home/home.vue"
import GoodsDetail from '../views/GoodsDetail/index.vue'

 Vue.use(VueRouter)
 const router = new VueRouter({
     routes:[
         {
           path:'/Home',
           component:Home
         },
         {
            path:'/',
            component:Home
          },
          {
              path:'/GoodsDetail',
              component:GoodsDetail
          }
     
     ]
 })
 export default router