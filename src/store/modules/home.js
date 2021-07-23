import { reqGetCategoryList } from "../../api/home";

const state = {
  categoryList: [],
};
const getters = {};
const actions = {
  async getCategoryLis({ commit }) {
    const data = await reqGetCategoryList();

    commit("GET_CATEGORY_LIS", data.slice(0, 15));
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
