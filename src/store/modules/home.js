import { reqGetCategoryList } from "../../api/home";

const state = {
  categoryList: [],
};
const getters = {};
const actions = {
  async getCategoryLis({ commit }) {
    try {
      const res = await reqGetCategoryList();
      if (res.data.code === 200) {
        commit("GET_CATEGORY_LIS", res.data.data.slice(0, 15));
      } else {
        console.log(res.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
const mutations = {
  GET_CATEGORY_LIS(state, categoryList) {
    state.categoryList = categoryList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
