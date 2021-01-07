// 封装axios拦截器
// 引入axios
import axios from "axios";

// 按需引入element-ui
import { Message } from "element-ui";
import getUserTempId from "./getUserTempld";
// 引入进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const instance = axios.create({
  baseURL: "/api",
});

// 设置响应拦截器
// 可以接受两个参数，只需要一个
instance.interceptors.request.use((config) => {
  // config 请求配置对象 将来发送请求 都会在config中找
  // 进度条开始
  NProgress.start();
  // 修改config 用来添加公共的请求参数
  const userTempId = getUserTempId();
  // 设置token
  const token = localStorage.getItem("token");
  // 判断是否有携带token
  if (token) {
    config.headers.token = token;
  }
  // 没有携带token就使用用户自己的id
  config.headers.userTempId = userTempId;
  return config;
});
// 设置响应拦截器
instance.interceptors.response.use(
  // 响应成功 当响应状态码为2xx
  (response) => {
    // 进度条结束
    NProgress.done();
    if (response.data.code === 200) {
      // 返回响应成功的数据
      return response.data.data;
    }
    // code不是200，功能失败，返回失败的promise
    //解构出来
    const { Message } = response.data;
    // 提示信息
    Message.error(message);
    // 返回失败的promise
    return Promise.reject(response.data);
  },
  // 响应失败，当响应状态码不是2xx
  (error) => {
    // 进度条结束
    NProgress.done();
    const message = error.message || "网络错误";
    // 提示信息
    Message.error(message);
    return Promise.reject(message);
  }
);
export default instance;
