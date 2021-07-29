import axios from "axios";
import nProgress from "nprogress";
import generateUserTempId from "./userTempId";
import "nprogress/nprogress.css";

nProgress.configure({ showSpinner: false });

const errorMessage = {
  401: "没有权限访问",
  403: "禁止访问",
  404: "资源找不到",
  500: "服务器故障",
};

// request功能与axios基本一致
const request = axios.create({
  baseURL: "/api", //增加请求地址公共前缀
  headers: {}, //公共请求头
  timeout: 10000, //请求超时时间
});

// 请求拦截器
request.interceptors.request.use((config) => {
  config.headers.userTempId = generateUserTempId();

  nProgress.start();
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  // 成功的回调
  (response) => {
    nProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    const message = response.data.message || "未知错误，请联系管理员";
    alert(message);
    return Promise.reject(message);
  },
  // 失败的回调
  (error) => {
    nProgress.done();
    let message = "未知错误，请联系管理员";
    // console.dir(error);
    if (error.response) {
      // 有值说明响应回来了 有响应状态码
      message = errorMessage[error.response.status];
    } else {
      //无值则说明响应未回来 断网(Network error)  网速慢 timeout
      if (error.message.indexOf("Network Error") !== -1) {
        message = "网络断开链接，请打开网络链接试试";
      } else if (error.message.indexOf("timeout") !== -1) {
        message = "网速太慢了，打开4G网或连接WIFI试试";
      }
    }
    alert(message);
    return Promise.reject(message);
  }
);

export default request;
