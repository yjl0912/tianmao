import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

// 声明使用插件
Vue.use(Vuex);

const geets = {};
const states = {};
const actions = {};
const mutations = {};

// 暴露出去
export default new Vuex.Store({
  states,
  geets,
  actions,
  mutations,
  modules, 
});
