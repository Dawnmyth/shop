<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商城后台管理系统</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <el-tabs v-model="currentIndex" stretch>
        <el-tab-pane label="登录" name="login">
          <el-form
            :model="loginForm"
            :rules="rules"
            ref="loginForm"
          >
            <el-form-item label="用户名" label-width="70px" prop="username">
              <el-input type="text" v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码" label-width="70px" prop="password">
              <el-input type="password" v-model="loginForm.password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitLogForm('loginForm')"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form
            :model="registerForm"
            :rules="rules"
            ref="registerForm"
          >
            <el-form-item label="用户名" label-width="70px" prop="username">
              <el-input type="text" v-model="registerForm.username" />
            </el-form-item>
            <el-form-item label="邮箱" label-width="70px">
              <el-input type="text" v-model="registerForm.email" />
            </el-form-item>
            <el-form-item label="密码" label-width="70px" prop="password">
              <el-input type="password" v-model="registerForm.password" />
            </el-form-item>
            <el-form-item label="确认密码" label-width="70px" prop="configurePassword">
              <el-input type="password" v-model="registerForm.configurePassword" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitRegForm('registerForm')"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import api from "../api"
import { mapMutations } from 'vuex'

export default {
  data() {
    // 验证规则
    const validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }else if(value.length<4) {
        callback(new Error("密码安全度太低"))
      }else{
        callback();
      }
    };
    const validateConPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请确认密码"));
      }else if(value !== this.registerForm.password) {
        callback(new Error("两次密码不一致"))
      }else{
        callback();
      }
    };

    return {
      currentIndex: "login",
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
        configurePassword:"",
        email:""
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        configurePassword:[{validator: validateConPass, trigger: "blur"}]
      },
    };
  },
  methods: {
    ...mapMutations("login",["setUser"]),
    submitLogForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(this.loginForm).then(res=>{
            if(res.data.status === 200){
              this.setUser(res.data)
              // 记住用户名密码功能
              localStorage.setItem("shop",JSON.stringify(res.data))
              this.$router.push("/")
            }else{
              const h = this.$createElement;
              this.$notify({
                title: '登录失败！',
                message: h('b',{style:'margin: 100px 0 300px'},'用户名密码错误')
              });
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitRegForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.register(this.registerForm).then(res => {
            if(res.data.status === 200){
              const h = this.$createElement;
              this.$notify({
                title: '注册成功！',
                message: h('b',{style:'margin: 100px 0 300px'},'请前往登录页面登录')
              });
            }else{
              const h = this.$createElement;
              this.$notify({
                title: '注册失败！',
                message: h('b',{style:'margin: 100px 0 300px'},'请重新注册')
              })
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.login {
  width: 1200px;
  margin: 0 auto;
}

.box-card {
  width: 500px;
  margin: 100px auto;
}
</style>