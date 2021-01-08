<<<<<<< HEAD
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../views/home/home.vue"
import GoodsDetail from '../views/GoodsDetail/index.vue'
import Login from '../views/Login/index.vue'


// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
=======
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import GoodsDetail from "../views/GoodsDetail";
import PayDetail from "../views/PayDetail"

>>>>>>> 27a17fccae105a5736e66c9f91c634a3c8b4947e
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
<<<<<<< HEAD
	// 如果用户想处理失败，就处理
	if (onComplete && onAbort) {
		return push.call(this, location, onComplete, onAbort);
	}
	// 如果用户不处理失败，给默认值：空函数
	return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
	// 如果用户想处理失败，就处理
	if (onComplete && onAbort) {
		return replace.call(this, location, onComplete, onAbort);
	}
	// 如果用户不处理失败，给默认值：空函数
	return replace.call(this, location, onComplete, () => {});
};


 Vue.use(VueRouter)
 const router = new VueRouter({
     mode:"history",
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
          },
          {
              path:'/Login' ,
              component:Login
          }
     
     ]
 })
 export default router
=======
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  return replace.call(this, location, onComplete, () => {});
};

 const router =new VueRouter({
    routes: [
        {
            path:"/goodsdetail",
            component:GoodsDetail
        },
        {
            path:"/paydetail",
            component:PayDetail
        }
    ]
 })
 export default router;
>>>>>>> 27a17fccae105a5736e66c9f91c634a3c8b4947e
