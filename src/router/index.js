import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/promotion',
    name: 'Promotion',
    component: () => import('../views/Promotion.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('../views/Contactus.vue')
  },
  {
    path: '/package-detail',
    name: 'PackageDetail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/customer-info',
    name: 'CustomerInfo',
    component: () => import('../views/CustomerInfo.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success.vue')
  },
  {
    path: '/compare',
    name: 'Compare',
    component: () => import('../views/Compare.vue')
  },
  {
    path: '/readmore',
    name: 'ReadMore',
    component: () => import('../views/ReadMore.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
