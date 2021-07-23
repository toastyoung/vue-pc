import request from "../utils/request";


export const reqGetCategoryList = () => {
  return request({
    method: "Get",
    url: "/product/getBaseCategoryList",
  });
};
