import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";
import Pagination from './components/Pagination'

if (process.env.NODE_ENV === "development") {
  require("./mock");
}

import "./styles/reset.css";
import "./styles/iconfont.css"

Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.component("Pagination", Pagination);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
