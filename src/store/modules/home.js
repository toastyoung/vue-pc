import { reqGetCategoryList, reqGetBanners,reqGetFloors } from "@/api/home";

const state = {
  //  三级分类
  categoryList: [],
  // 轮播图
  banners: [],
  floors: [],
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
  async getFloors({ commit }) {
    const data = await reqGetFloors();
    commit("GET_FLOORS", data);
  },
};
const mutations = {
  GET_CATEGORY_LIS(state, categoryList) {
    state.categoryList = categoryList;
  },
  GET_BANNERS(state, banners) {
    state.banners = banners;
  },
  GET_FLOORS(state, floors) {
    state.floors = floors;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
