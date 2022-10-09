<template>
  <el-menu
    :default-active="active"
    mode="horizontal"
    background-color="skyblue"
    text-color="#fff"
    active-text-color="red"
    router
    @select="handleSelect"
  >
    <!-- w -->
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/product">商品管理</el-menu-item>
    <el-menu-item index="/params">规格参数</el-menu-item>
    <el-menu-item index="/ad">广告管理</el-menu-item>
    <el-menu-item class="user">
      <span class="user-name">{{ user.username }}</span>
      <el-button @click="logoutHandle">退出登录</el-button>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
  data() {
    return {
      active: "/",
    };
  },
  computed: {
    ...mapState("login", ["user"]),
  },
  mounted(){
    if(sessionStorage.getItem("key")){
      this.active = sessionStorage.getItem("key")
    }
  },
  methods: {
    ...mapMutations("login",["setUser"]),
    logoutHandle() {
      this.setUser({})
      // 取消记住用户信息
      localStorage.removeItem("shop")
      this.$router.push("/login")
    },
    handleSelect(key){
      sessionStorage.setItem("key",key)
    }
  },
};
</script>

<style scoped lang='less'>
.user {
  float: right !important;
  margin-right: 20px !important;
  line-height: 60px !important;
  .user-name {
    color: #fff;
    margin-right: 10px;
    font-size: 15px;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    overflow: hidden;
  }
}
</style>
