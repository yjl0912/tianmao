// 封装axios拦截器
// 引入axios
import axios from "axios";

// 按需引入element-ui
import { Message } from "element-ui";
// 引入进度条插件
import NProgrees from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
const instance = axios.create({
  baseURL: "/mock",
});

// 设置请求拦截器
// 可以接受两个参数，通常只需要一个即可
instance.interceptors.request.use((config) => {
//   // config 请求的配置对象 将来发送请求 都会在config中找
//   // 进度条开始
  NProgrees.start();
//   // 修改config,用来添加公共的请求参数
  return config;
});
// 设置响应拦截器
instance.interceptors.response.use(
  // 响应成功，当响应码是2xx
  (response) => {
    // 进度条结束
    NProgrees.done();
    // 判断响应的code是否是200
    if (response.data.code === 200) {
      // 返回响应成功的数据
      return response.data.data;
    }
    // code不是200 功能失败
    // 解构出来
    const { message } = response.data;
    // 提示信息
    Message.error(message);
    return Promise.reject(response.data.message);
  },
  // 响应失败
  (error) => {
    // 进度条结束
    NProgrees.done();
    const message = error.message || "网络错误";
    // 提示信息
    Message.error(message);
    return Promise.reject(message);
  }
);
export default instance;






// import axios from "axios";

// const instance = axios.create({
//   baseURL: "/mock",
//   headers: {
//     //
//   },
// });

// /* 响应拦截器 */
// instance.interceptors.response.use(
//   (response) => {
//     if (response.data.code === 200) {
//       return response.data.data;
//     }
//     return Promise.reject(response.data.message);
//   },
//   (error) => {
//     const message = error.message || "网络错误";
//     return Promise.reject(message);
//   }
// );
// export default instance;
