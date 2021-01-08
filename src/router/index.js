import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import GoodsDetail from "../views/GoodsDetail";
import PayDetail from "../views/PayDetail"

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
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