<template>
  <el-tree
    :load="loadNode"
    :props="defaultProps"
    @node-click="handleNodeClick"
    lazy
  ></el-tree>
</template>

<script>
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
  },

  methods: {
    handleNodeClick(data) {
      this.$emit("onTree",data)
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        this.$api.selectProductId().then((res) => {
          if(res.data.status === 200) {
            return resolve(res.data.result)
          }else{
            return resolve([])
          }
        });
      }
      if (node.level >= 1) {
        this.$api.selectProductId({id:node.data.cid}).then((res) => {
          if(res.data.status === 200) {
            return resolve(res.data.result)
          }else{
            return resolve([])
          }
        });
      }
    },
  },
};
</script>

<style>
</style>