<template>
  <div class="index-left-block">
    <h2>全部产品</h2>
    <div v-for="(product, index) in productList" :key="index">
      <h3>{{ product.title }}</h3>
      <ul>
        <li v-for="(item, index) in product.list" :key="index">
          <a :href="item.url">{{ item.name }}</a>
          <span class="hot-tag" v-if="item.hot">HOT</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          title: "手机应用类",
          list: [
            {
              id: 1,
              name: "shop助手",
              url: "javascript:;",
              hot: true,
            },
            {
              id: 2,
              name: "手机助手",
              url: "javascript:;",
              hot: false,
            },
            {
              id: 3,
              name: "全军突击",
              url: "javascript:;",
              hot: true,
            },
          ],
        },
        {
          title: "PC应用类",
          list: [
            {
              id: 1,
              name: "shop助手",
              url: "javascript:;",
              hot: true,
            },
            {
              id: 2,
              name: "PC助手",
              url: "javascript:;",
              hot: false,
            },
            {
              id: 3,
              name: "warthunder",
              url: "javascript:;",
              hot: true,
            },
            {
              id: 4,
              name: "shop助手",
              url: "javascript:;",
              hot: true,
            },
            {
              id: 5,
              name: "PC助手",
              url: "javascript:;",
              hot: false,
            },
            {
              id: 6,
              name: "warthunder",
              url: "javascript:;",
              hot: true,
            },
          ],
        },
        {
          title: "猜你喜欢",
          list: [
            {
              id: 1,
              name: "shop助手",
              url: "javascript:;",
              hot: true,
            },
            {
              id: 2,
              name: "PC助手",
              url: "javascript:;",
              hot: false,
            },
            {
              id: 3,
              name: "warthunder",
              url: "javascript:;",
              hot: true,
            },
            {
              id: 4,
              name: "shop助手",
              url: "javascript:;",
              hot: true,
            },
            {
              id: 5,
              name: "PC助手",
              url: "javascript:;",
              hot: false,
            },
            {
              id: 6,
              name: "warthunder",
              url: "javascript:;",
              hot: true,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.index-left-block {
  left: 0;
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px rgb(79, 77, 77);
}
.index-left-block .hr {
  margin-bottom: 20px;
  height: 1px;
  width: 100%;
  background: #ddd;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 6px;
  a {
    color: #222;
  }
}
.hot-tag {
  background: red;
  color: #fff;
}
</style>