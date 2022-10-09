<template>
  <div class="index-wrap">
    <div class="index-left">
      <HomeNav />
    </div>
    <div class="index-right">
      <HomeSwiper />
      <HomeProduct/>
    </div>
  </div>
</template>

<script>
import HomeNav from "./HomeNav.vue";
import HomeProduct from './HomeProduct.vue';
import HomeSwiper from "./HomeSwiper.vue";

export default {
  name: "HomeView",
  components: {
    HomeNav,
    HomeSwiper,
    HomeProduct,
  },
};
</script>

<style lang="less" scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
}
.index-left {
  float: left;
  width: 200px;
  text-align: center;
}
.index-right {
  float: left;
  width: 1000px;
}
</style>

