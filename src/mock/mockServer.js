import Mock from "mockjs";
import shopCart from "./shopCart.json";
import shopCartDetail from "./shopCartDetail.json";
Mock.mock("/mock/shopCart", "get", {
  code: 200,
  data: shopCart,
});
Mock.mock("/mock/shopcartDetail", "get", {
  code: 200,
  data: shopCartDetail,
});
