import request from "../utils/request";

export const reqGetCartList = () => {
  return request({
    method: "GET",
    url: "/cart/cartList",
  });
};
