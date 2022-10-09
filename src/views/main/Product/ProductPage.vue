<template>
  <el-pagination
    class="page"
    :current-page.sync="currentPage"
    layout="prev, pager, next, jumper"
    @current-change="handleCurrentChange"
    :total="total"
    @size-change="handleSizeChange"
  >
  </el-pagination>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
    };
  },
  mounted() {
    this.$api.total().then((res) => {
      if (res.data.status === 200) {
        this.total = res.data.result[0]["count(*)"];
      }
    });
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange(value) {
      this.current = value;
      this.$bus.$emit("page", value);
    },
  },
};
</script>

<style scoped>
.page {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}
</style>