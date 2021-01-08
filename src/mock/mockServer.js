import Mock from "mockjs";
import shopCart from "./shopCart.json";
Mock.mock("/mock/shopCart", "get", {
    code: 200,
    data: shopCart
  });