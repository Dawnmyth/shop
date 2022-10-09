<template>
  <div class="product">
    <ProductHeader/>
    <ProductList/>
    <ProductPage/>
    <ProductAdd/>
    <ProductEditor/>
  </div>
</template>

<script>
import ProductHeader from './ProductHeader.vue'
import ProductList from './ProductList.vue'
import ProductPage from './ProductPage.vue'
import ProductAdd from './ProductAdd.vue'
import ProductEditor from './ProductEditor.vue'

export default {
  components:{
    ProductHeader,
    ProductList,
    ProductPage,
    ProductAdd,
    ProductEditor
  }
}
</script>

<style scoped>
  .product{
    width: 1200px;
    margin: 0 auto;
  }
</style>