import { reqSearchGoodsList } from "@/api/search";

const state = {
  // 商品
  goodsList: [],
  // 属性
  attrsList: [],
  // 品牌
  trademarkList: [],
  // 总数
  total: 0,
};
const getters = {};
const actions = {
  async searchGoodsList({ commit }, options) {
    const data = await reqSearchGoodsList(options);
    commit("SEARCH_GOODSLIST", data);
  },
};
const mutations = {
  SEARCH_GOODSLIST(state, data) {
    state.goodsList = data.goodsList;
    state.attrsList = data.attrsList;
    state.trademarkList = data.trademarkList;
    state.total = data.total;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
