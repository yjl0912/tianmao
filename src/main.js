import Vue from 'vue'
import App from './App.vue';
import store from "./store";
import router from "./router";
import "./mock/mockServer";
import "./plugins/element.js";
import 'element-ui/lib/theme-chalk/index.css';
import "swiper/swiper-bundle.min.css";
import "./styles/font/iconfont.css";
import '../public/iconfont/iconfont.css'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



