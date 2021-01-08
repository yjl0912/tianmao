import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import "swiper/swiper-bundle.min.css";
import "./styles/font/iconfont.css";
import '../public/iconfont/iconfont.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')




;
