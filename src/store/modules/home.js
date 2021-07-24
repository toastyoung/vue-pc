import { reqGetCategoryList, reqGetBanners } from "@/api/home";

const state = {
  //  三级分类
  categoryList: [],
  // 轮播图
  banners: [],
};
const getters = {};
const actions = {
  async getCategoryLis({ commit }) {
    const data = await reqGetCategoryList();

    commit("GET_CATEGORY_LIS", data.slice(0, 15));
  },

  async getBanners({ commit }) {
    const data = await reqGetBanners();
    commit("GET_BANNERS", data);
  },
};
const mutations = {
  GET_CATEGORY_LIS(state, categoryList) {
    state.categoryList = categoryList;
  },
  GET_BANNERS(state, banners) {
    state.banners = banners;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
