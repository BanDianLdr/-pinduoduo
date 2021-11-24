<template>
    <div class="swiper">
    <div class="swiper-container" id="swiperOne">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in img" :key="index">
          <img src="https://mms-static.pinduoduo.com/static/media/login-banner.1d2f68e4.png" />
          <img src="https://mms-static.pinduoduo.com/static/media/login-banner.1d2f68e4.png" />
          <img src="https://mms-static.pinduoduo.com/static/media/login-banner.1d2f68e4.png" />
          <img src="https://mms-static.pinduoduo.com/static/media/login-banner.1d2f68e4.png" />
          <img src="https://mms-static.pinduoduo.com/static/media/login-banner.1d2f68e4.png" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" style="color: #00f0ff"></div>
      <img
        class="swiper-button-prev"
        id="one"
        :src="leftimg"
        @click="left"
        alt=""
      />
      <img
        class="swiper-button-next"
        id="two"
        :src="rightimg"
        @click="right"
        alt=""
      />
    </div>
  </div>
</template>
<script>
//引入swiper
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  mounted() {
    var mySwiper =new Swiper("#swiperOne", {
      loop: true, // 循环模式选项
    //   autoplay: true, //自动播放
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
//   methods:{
//     left(){
//         this.leftimg=require("@/assets/images/左.png")
//         this.rightimg=require("@/assets/images/未标题-1_03.gif")
//     },
//     right(){
//         this.leftimg=require("@/assets/images/首页改1_10.gif")
//         this.rightimg=require("@/assets/images/首页改1_13.gif")
//     }
//   }
}
</script>
<style  lang="scss" scoped>
.swiper {
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 466px;
}
.swiper-slide img {
  width: 1920px;
  height: 466px;
}
#one {
  position: absolute;
  width: 32px;
  height: 31px;
  top: 55%;
  left: 30px;
  z-index: 999;
  opacity: 0.7;
}

#two {
  position: absolute;
  width: 32px;
  height: 31px;
  right: 30px;
  left: 3.2rem;
  opacity: 0.7;
  top: 55%;
  z-index: 999;
}
.swiper-pagination {
  --swiper-theme-color: #00f0ff;
}
</style>