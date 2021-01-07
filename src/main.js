import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/font/iconfont.css";
import "../public/iconfont/iconfont.css";
import "./mock/mockServer";
import store from "./store";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
