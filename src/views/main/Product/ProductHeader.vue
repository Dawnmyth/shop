<template>
  <div class="head">
    <el-form ref="searchForm" :model="search" @submit.native.prevent>
      <el-form-item>
        <el-input v-model="search.content" @keyup.enter.native="Select"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Select">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addFormHandle">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        content: "",
      },
    };
  },
  methods: {
    Select() {
      if(this.search.content){
        this.$api.search({
          search: this.search.content,
        }).then((res) => {
          if(res.data.status === 200){
            this.$bus.$emit("searchData",res.data.result)
          }
        });
      }
    },
    addFormHandle(){
      this.$bus.$emit("onAddEvent",true)
    }
  },
};
</script>

<style scoped lang="less">
.el-form {
  overflow: hidden;
  clear: both;
  .el-form-item {
    float: left;
    margin-right: 10px;
    .el-input {
      width: 1020px;
    }
  }
}

.head {
  margin-top: 20px;
  width: 100%;
}
</style>