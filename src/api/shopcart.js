//
// import axios from "axios";
// import request from "../utils/request";
import mockRequest from "../utils/mockRequest";
export const reqGetCartList = () => {
  return mockRequest({
    method: "GET",
    url: "/shopcartDetail",
  });
};

// 获取所有购物车商品数据
// export const reqGetCartList = () => {
//   return requestAnimationFrame({
//     method: "GET",
//     url: `/cart/cartList`,
//   });
// };

// // 添加，减少购物车商品数量
// export const reqUpdateCartCount = (skuId, skuNum) => {
//   return request({
//     method: "POST",
//     url: `/cart/addToCart/${skuId}/${skuNum}`,
//   });
// };

// // 切换选中商品
// export const reqUpdateCartCheck = (skuId, isChecked) => {
//   return request({
//     method: "GET",
//     url: `/cart/checkCart/${skuId}/${isChecked}`,
//   });
// };

// // 删除商品
// export const reqDeleteCart = (skuId) => {
//   return request({
//     method: "DELETE",
//     url: `/cart/deleteCart/${skuId}`,
//   });
// };
