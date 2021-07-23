import axios from "axios";
export const reqGetCategoryList = () => {
  return axios({
    method: "Get",
    url: "/api/product/getBaseCategoryList",
  });
};
