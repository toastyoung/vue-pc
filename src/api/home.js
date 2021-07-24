import request from "../utils/request";
import requestMock from "../utils/requestMock";

export const reqGetCategoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};

export const reqGetBanners = () => {
  return requestMock({
    method: "GET",
    url: "/banners",
  });
};

export const reqGetFloors = () => {
  return requestMock({
    method: "GET",
    url: "floors",
  });
};
