const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',

  //输出文件目录
  outputDir: "dist",
  //webpack-dev-server相关配置
  devServer: {
    host: "localhost",
    open: true, //配置游览器自动访问
  },
})
