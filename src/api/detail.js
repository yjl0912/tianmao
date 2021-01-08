import request from "../utils/request";
import mockRequest from  "../utils/mockRequest"
/* 商品详情 */
export const reqGetProductDetail = id => {
    return request({
        method: "GET",
        url: `/item/${id}`
      });
}
/* 订单详情 */
export const reqGetBanners = () => {
  return mockRequest({
    method: "GET",
    url: "/shopCart"
  });
};