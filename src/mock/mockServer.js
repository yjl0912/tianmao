import Mock from "mockjs";
import shopCart from "./shopCart.json";
Mock.mock("/mock/shopcart", "get", {
  code: 200,
  data: shopCart,
});
