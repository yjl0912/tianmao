import Vue from "vue";
import App from "./App.vue";
import "./styles/font/iconfont.css";
import '../public/iconfont/iconfont.css'
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
