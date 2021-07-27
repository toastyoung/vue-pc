import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Search from "../views/Search";
import Login from "../views/Login";
import Register from "../views/Register";
import Detail from "@/views/Detail";
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from "@/views/ShopCart"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search/:keyword?",
    name: "Search",
    component: Search,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/addCartSuccess",
    name: "AddCartSuccess",
    component: AddCartSuccess,
  },
  {
    path: "/shopCart",
    name: "ShopCart",
    component: ShopCart,
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // 滚动行为：当路由切换时触发
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
