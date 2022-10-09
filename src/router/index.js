import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/main/Home/HomeView.vue'
import LayOut from "../views/LayOut.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayOut,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
        meta: {
          isLogin: true
        },
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import("../views/main/Product/index.vue"),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'params',
        name: 'Params',
        component: () => import("../views/main/Params/Params.vue"),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'ad',
        name: 'ADCategory',
        component: () => import("../views/main/ADCategory.vue"),
        meta: {
          isLogin: true
        }
      },
      {
        path:"details",
        name:"Details",
        component:() => import("../views/main/Home/sub/Details.vue"),
        children:[
          {
            path:"openproduct",
            name:"Openproduct",
            component:() => import("../views/main/Home/sub/openproduct.vue"),
          },
          {
            path:"golife",
            name:"golife",
            component:() => import("../views/main/Home/sub/golife.vue"),
          },
          {
            path:"heigh",
            name:"heigh",
            component:() => import("../views/main/Home/sub/heigh.vue"),
          },
          {
            path:"logo",
            name:"logo",
            component:() => import("../views/main/Home/sub/logo.vue"),
          },
        ]
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login.vue"),
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
