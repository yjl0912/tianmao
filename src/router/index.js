import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/home/home.vue";
import GoodsDetail from "../views/GoodsDetail/index.vue";
import Login from "../views/Login/index.vue";
import PayDetail from "../views/PayDetail";
import Registered from "../views/Registered";
import Verify from "../views/Verify";
import Pay from "../views/Pay";
import Paysuccess from "../views/Paysuccess/paysuccess.vue";
import ShopCart from "../views/ShopCart";

// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
Vue.use(VueRouter);
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, onComplete, onAbort) {
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
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/Home",
      component: Home,
    },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/GoodsDetail",
      component: GoodsDetail,
    },
    {
      path: "/Login",
      component: Login,
    },
    {
      path: "/goodsdetail",
      component: GoodsDetail,
    },
    {
      path: "/paydetail",
      component: PayDetail,
    },
    {
      path: "/Registered",
      component: Registered,
    },
    {
      path: "/Verify",
      component: Verify,
    },
    {
      path: "/Pay",
      component: Pay,
    },
    {
      path: "/Paysuccess",
      component: Paysuccess,
    },
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
