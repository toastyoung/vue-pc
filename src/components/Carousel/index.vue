<template>
  <div
    class="swiper-container"
    ref="swiper"
    @mouseenter="swiper.autoplay.stop()"
    @mouseleave="swiper.autoplay.start()"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in imageList" :key="img.id">
        <img :src="img.imgUrl" />
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Carousel",
  props: {
    imageList: Array,
  },
  watch: {
    imageList() {
      this.$nextTick(()=>{
        // new Swiper必须等DOM元素生成好才行
      this.swiper = new Swiper(this.$refs.swiper, {
        navigation: {
          // 左右箭头
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          // 小圆点
          el: ".swiper-pagination",
        },
        loop: true, // 无缝轮播
        autoplay: {
          // 自动轮播
          delay: 1000,
        },
      });
      })
    },
  },
};
</script>

<style>
</style>