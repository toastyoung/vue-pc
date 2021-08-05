import Vue from "vue";
import VueLazyload from "vue-lazyload"
import App from "./App.vue";
import router from "./router";
import store from "./store";


  Vue.use(VueLazyload,{
    preLoad: 1.3,
    loading: require("./assets/imgs/loading.gif"),
    attempt: 1,
  })

import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";
import Pagination from './components/Pagination'
import Dialog from "./components/Dialog"

if (process.env.NODE_ENV === "development") {
  require("./mock");
}

import "./styles/reset.css";
import "./styles/iconfont.css"

Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.component("Pagination", Pagination);
Vue.component("Dialog", Dialog);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
