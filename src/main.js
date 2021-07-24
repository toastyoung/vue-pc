import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";

if (process.env.NODE_ENV === "development") {
  require("./mock");
}

import "./styles/reset.css";

Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
