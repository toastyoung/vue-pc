import request from "@/utils/request";

// 添加到购物车
export const reqAddCart = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};

// 获取购物车列表
export const reqGetCartList = () => {
  return request({
    method: "GET",
    url: "/cart/cartList",
  });
};

// 切换购物车选中状态
export const reqChangeIsChecked = (skuId, isChecked) => {
  return request({
    method: "GET",
    url: `/cart/checkCart/${skuId}/${isChecked}`,
  });
};

// 删除购物车商品
export const reqDelGoods = (skuId) => {
  return request({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`,
  });
};
