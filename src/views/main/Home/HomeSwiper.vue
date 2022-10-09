<template>
  <div class="swiper-size">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in bannerImg" :key="index">
        <img class="swiperimg" :src="slide" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      },
      bannerImg: [
        require("../../../assets/slideShow/j1.jpg"),
        require("../../../assets/slideShow/j2.jpg"),
        require("../../../assets/slideShow/j3.jpg"),
        require("../../../assets/slideShow/j4.jpg"),
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.swiperimg {
  width: 100%;
  height: 350px;
}

.swiper-size {
  margin-top: 15px;
}
</style>