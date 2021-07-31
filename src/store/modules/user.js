import { reqLogin, reqLogout } from "@/api/user";

const initUser = JSON.parse(localStorage.getItem("user")) || {
  nickName: "",
  token: "",
};

const state = initUser;
const getters = {};
const actions = {
  async login({ commit }, { phone, password }) {
    const user = await reqLogin(phone, password);
    commit("LOGIN", user);
  },
  async logout({ commit }) {
    await reqLogout();
    commit("LOGOUT");
  },
};
const mutations = {
  LOGIN(state, user) {
    const { nickName, token } = user;

    localStorage.setItem("user", JSON.stringify({ nickName, token }));

    state.nickName = nickName;
    state.token = token;
  },
  LOGOUT(state) {
    localStorage.removeItem("user");
    state.nickName = "";
    state.token = "";
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
