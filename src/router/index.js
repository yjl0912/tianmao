import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store/index";

import ShopCart from "../views/ShopCart";
import Login from "../views/Login";
// 安装使用插件
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart,
    },
    {
      name: "login",
      path: "/login",
      component: Login,
    },
  ],
});
export default router;
