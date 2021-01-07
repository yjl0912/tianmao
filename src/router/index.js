import Vue from "vue";
import VueRouter from "vue-router";
import Registered from "../views/Registered"
import Verify from "../views/Verify"
import Pay from "../views/Pay";
Vue.use(VueRouter);
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

const router = new VueRouter({
    routes:[
        {
            path:"/",
            component:Registered
        },
        {
            path: "/Verify",
            component:Verify
        },
        {
            path:"/Pay",
            component:Pay
        },
    ],
});
export default router