import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home";
// import Search from "../views/Search";
// import Login from "../views/Login";
const Home = ()=>import("../views/Home")
const Search = ()=>import("../views/Search")
const Login = ()=>import("../views/Login")
const Register = ()=>import("../views/Register")
const Detail = ()=>import("../views/Detail")
const AddCartSuccess = ()=>import("../views/AddCartSuccess")
const ShopCart = ()=>import("../views/ShopCart")
const Trade = ()=>import("../views/Trade")
const Pay = ()=>import("../views/Pay")
const PaySuccess = ()=>import("../views/PaySuccess")
const Center = ()=>import("../views/Center")

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
  },
  {
    path: "/trade",
    name: "Trade",
    component: Trade,
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
  },
  {
    path: "/paySuccess",
    name: "PaySuccess",
    component: PaySuccess,
  },
  {
    path: "/center",
    name: "Center",
    component: Center,
  },
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
