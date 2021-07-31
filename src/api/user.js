import request from "@/utils/request";

// 验证码
export const reqSendCode = (phone) => {
  return request({
    method: "GET",
    url: `/user/passport/sendCode/${phone}`,
  });
};

// 注册
export const reqRegister = (data) => {
  return request({
    method: "POST",
    url: "/user/passport/register",
    data,
  });
};

// 登录
export const reqLogin = (phone, password) => {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
};

// 登出
export const reqLogout = () => {
  return request({
    method: "GET",
    url: "/user/passport/logout",
  });
};
