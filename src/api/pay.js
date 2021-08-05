import request from "@/utils/request";

// 获取订单交易页信息

export const reqGetTradeInfo = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade",
  });
};

// 提交订单
export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList,
}) => {
  return request({
    method: "POST",
    url: "/order/auth/submitOrder",
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    },
    params: { tradeNo },
  });
};

// 获取支付二维码
export const reqGetWechatQRCode = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`,
  });
};

// 获取订单支付状态
export const reqGetPayStatus = (orderId) => {
  return request({
    method: "GET",
    url: `payment/weixin/queryPayStatus/${orderId}`,
  });
};

