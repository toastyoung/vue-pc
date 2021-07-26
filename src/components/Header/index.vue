<template>
  <div class="header">
    <div class="header-top">
      <span class="header-user">
        尚品汇欢迎您！请
        <router-link to="/login" class="header-user-login">登录</router-link>
        <router-link to="/register">免费注册</router-link>
      </span>
      <ul class="header-nav">
        <li><a>我的订单</a></li>
        <li><a>我的购物车</a></li>
        <li><a>我的尚品汇</a></li>
        <li><a>尚品汇会员</a></li>
        <li><a>企业采购</a></li>
        <li><a>关注尚品汇</a></li>
        <li><a>合作招商</a></li>
        <li><a>商家后台</a></li>
      </ul>
    </div>
    <div class="header-bottom">
      <router-link to="/">
        <img src="./logo.png" alt="尚品汇" class="header-logo" />
      </router-link>
      <form class="header-search" @submit.prevent="goSearch">
        <input type="text" v-model="keyword" />
        <button type="submit">搜索</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: this.$route.params.keyword,
    };
  },
  methods: {
    goSearch() {
      const {
        keyword,
        $route: { query },
      } = this;

      const location = { name: "Search" };
      // 如果有query参数就添加上去
      location.query = query;

      // 当params有值则添加上去
      if (keyword) {
        location.params = { keyword };
      }
      this.$router.history.push(location);
    },
  },
  watch: {
    $route($route) {
      this.keyword = $route.params.keyword;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 100px;
  color: #000;
}
a {
  color: #000;
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 0 20px;
  background-color: #eaeaea;
}
.header-user-login {
  border-right: 1px solid black;
  padding: 0 5px;
  margin: 0 5px;
}
.header-nav {
  display: flex;
  li {
    padding: 0 10px;
    border-right: 1px solid black;
    &:last-child {
      border: 0;
    }
  }
}
.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
}
.header-search {
  display: flex;
  align-items: center;
  input {
    box-sizing: border-box;
    width: 500px;
    height: 32px;
    border: 1px solid red;
  }
  button {
    width: 66px;
    height: 32px;
    background-color: red;
    border: 0;
    color: #fff;
  }
}
</style>