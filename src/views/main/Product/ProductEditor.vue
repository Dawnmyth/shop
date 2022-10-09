<template>
  <el-dialog
    title="编辑产品"
    :visible.sync="dialogEditorVisible"
    width="70%"
    @before-close="handleClose"
  >
    <el-form label-width="70px" :model="editorForm" ref="editorForm">
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
        <el-input v-model="editorForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品卖点">
        <el-input v-model="editorForm.sellPoint"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="editorForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="editorForm.num"></el-input>
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
      <el-button @click="dialogEditorVisible = false">取 消</el-button>
      <el-button type="primary" @click="editorProductHandle">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import ProductTree from "./ProductTree.vue";
import ProductUpload from "./ProductUpload.vue";

export default {
  data() {
    return {
      dialogEditorVisible: false,
      dialogCategoryVisible: false,
      dialogUploadVisible: false,
      editorForm: {
        name: "",
        sellPoint: "",
        price: "",
        num: "",
      },
      treeData:{},// 存储类目
      uploadData:{}, // 存储图片
      productinfo:"",
      currentData:{}
    };
  },
  components: {
    ProductTree,
    ProductUpload,
  },
  mounted() {
    this.$bus.$on("onEditorEvent", row => {
      this.dialogEditorVisible = true;
      this.currentData = row
      this.$api.preUpdateItem({id:row.id}).then(res=>{
        // this.treeData.name = res.data.result[0].cid
        this.editorForm.name = res.data.result[0].title
        this.editorForm.sellPoint = res.data.result[0].sellPoint
        this.editorForm.price = res.data.result[0].price
        this.editorForm.num = res.data.result[0].num
        this.productinfo =  res.data.result[0].descs
      })
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
    editorProductHandle(){
      this.$api.updateProduct({
        id:this.currentData.id,
        cid:this.treeData.cid,
        title:this.editorForm.name,
        sellPoint:this.editorForm.sellPoint,
        price:this.editorForm.price,
        num:this.editorForm.num,
        desc:this.productinfo,
        image:"待添加"
      }).then(res=>{
        if(res.data.status === 200){
          this.dialogEditorVisible = false
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