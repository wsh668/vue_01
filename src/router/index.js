import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Zxllogin from '../views/Zxllogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Zxllogin'
  },
  {
    path: '/login',
    // 这里name的作用可以用于指定那个router-view来渲染组件，也可以不指定view
    // name: 'login',
    component: Login
  },
  {
    path: '/Zxllogin',
    component: Zxllogin
  }
]

const router = new VueRouter({
  routes
})

export default router
