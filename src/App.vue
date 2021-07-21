<template>
  <div>
    <Header />
    <router-view />
    <Footer v-if="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "./views/Header";
import Footer from "./views/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>