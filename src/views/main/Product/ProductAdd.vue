<template>
  <el-dialog
    title="添加产品"
    :visible.sync="dialogAddVisible"
    width="70%"
    @before-close="handleClose"
  >
    <el-form label-width="70px" :model="addForm" ref="addForm">
      <el-form-item label="商品类目" >
        <el-button type="primary" @click="dialogCategoryHandle" class="formleft">类目查看</el-button>
        <span class="tree">{{treeData.name}}</span>
        <el-dialog
          width="50%"
          append-to-body
          title="类目查看"
          :visible.sync="dialogCategoryVisible"
        >
          <ProductTree @onTree="getTreeData"/>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogCategoryVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="addForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品卖点">
        <el-input v-model="addForm.sellPoint"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="addForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="addForm.num"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">待完善
        <!-- <el-button type="primary" @click="dialogUploadHandle" class="formleft">图片上传</el-button> -->
        <!-- <img class="upload-img" :src="uploadData.url" alt=""> -->
        <el-dialog
          width="50%"
          append-to-body
          title="图片上传,请将文件名设置成英文格式"
          :visible.sync="dialogUploadVisible"
        >
          <ProductUpload @onUpload="getOnUpload"/>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogUploadVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="productinfo" @input="changeinfo(productinfo)">
        </el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogAddVisible = false">取 消</el-button>
      <el-button type="primary" @click="addProductHandle">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import ProductTree from "./ProductTree.vue";
import ProductUpload from "./ProductUpload.vue";

export default {
  data() {
    return {
      dialogAddVisible: false,
      dialogCategoryVisible: false,
      dialogUploadVisible: false,
      addForm: {
        name: "",
        sellPoint: "",
        price: "",
        num: "",
      },
      treeData:{},// 存储类目
      uploadData:{}, // 存储图片
      productinfo:""
    };
  },
  components: {
    ProductTree,
    ProductUpload,
  },
  mounted() {
    this.$bus.$on("onAddEvent", (flag) => {
      this.dialogAddVisible = flag;
    });
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    dialogCategoryHandle() {
      this.dialogCategoryVisible = true;
    },
    dialogUploadHandle() {
      this.dialogUploadVisible = true;
    },
    getTreeData(data){
      this.treeData = data
    },
    getOnUpload(data){
      console.log(data);
      if(data.url){
        data.url = data.url.replace("server\\upload\\","http://localhost:3000/")
      }
      this.uploadData = data
    },
    changeinfo(data){
      this.editorData = data
    },
    addProductHandle(){
      this.$api.insertProduct({
        cid:this.treeData.cid,
        title:this.addForm.name,
        sellPoint:this.addForm.sellPoint,
        price:this.addForm.price,
        num:this.addForm.num,
        desc:this.productinfo,
        image:"待添加"
      }).then(res=>{
        if(res.data.status === 200){
          this.dialogAddVisible = false
          this.$bus.$emit("refresh",true)
        }
      })
    }
  },
};
</script>

<style>
.formleft{
  float: left;
}
.tree{
  float: left;
  margin-left: 10px;
}
.upload-img{
  float: left;
  margin-left: 10px;
  width: 300px;
}
</style>