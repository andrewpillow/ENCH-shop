import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/views/layout'
import login from '@/views/login'
import myOrder from '@/views/myorder'
import pay from '@/views/pay'
import proDetail from '@/views/prodetail'
import search from '@/views/search'

import home from '@/views/layout/home.vue'
import cart from '@/views/layout/cart.vue'
import category from '@/views/layout/category.vue'
import user from '@/views/layout/user.vue'

import store from '@/store/index'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [
        { path: '/home', component: home },
        { path: '/cart', component: cart },
        { path: '/category', component: category },
        { path: '/user', component: user }
      ]

    },
    { path: '/login', component: login },
    { path: '/myorder', component: myOrder },
    { path: '/pay', component: pay },
    { path: '/prodetail', component: proDetail },
    { path: '/search', component: search }
  ]
})

// 权限页面数组
const needTokenArr = ['/pay', '/myorder', '/user']

router.beforeEach((to, from, next) => {
  if (!needTokenArr.includes(to.path)) {
    next()
  } else {
    if (store.state.user.userInfo.token) {
      next()
    } else {
      next('/login')
    }
  }
})
