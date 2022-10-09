<template>
  <el-table :data="tableData">
    <el-table-column show-overflow-tooltip prop="id" label="产品ID" width="100">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="title"
      label="产品名称"
      width="200"
    >
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="image"
      label="产品图片"
      width="100"
    >
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="sellPoint"
      label="产品卖点"
      width="300"
    >
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="price"
      label="产品价格"
      width="100"
    >
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="num"
      label="产品数量"
      width="100"
    >
    </el-table-column>
    <el-table-column show-overflow-tooltip prop="descs" label="产品描述">
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.api(1);
    this.$bus.$on("page", (page) => {
      this.api(page);
    });
    this.$bus.$on("searchData", (data) => {
      this.tableData = data;
    });
    this.$bus.$on("refresh", () => {
      this.api(1)
    });
  },
  methods: {
    api(page) {
      this.$api.selectProduct({ page }).then((res) => {
        if (res.data.status === 200) {
          this.tableData = res.data.result;
        }
      });
    },
    handleEdit(index,row){
      this.$bus.$emit("onEditorEvent",row)
    },
    handleDelete(index,row){
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$api.deleteProduct({id:row.id}).then(res=>{
            if(res.data.status === 200) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.api(1);
            }else{
              this.$message({
                type: "error",
                message:"删除失败！"
              })
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }

  },
};
</script>

<style>
</style>