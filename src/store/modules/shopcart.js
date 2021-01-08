// 请求接口地址
// 引入接口
import {
  reqGetCartList,
  // reqUpdateCartCount,
  // reqUpdateCartCheck,
  // reqDeleteCart,
} from "../../api/shopcart";

export default {
  states: {
    cartList: [
      // {
      // }
    ], // 购物车所有数据数组
  },
  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      // 触发mutations
      commit("GET_CART_LIST", cartList);
    },
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
  },
};
