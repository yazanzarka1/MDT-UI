import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/loginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'home',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard.vue'),
    children: [
      {
        path:'index',
        component: () => import('@/views/dashboardchildren/index.vue')
      },
      {
      path:'searchname',
      component: () => import('@/views/dashboardchildren/searchByName.vue')
    },
    {
      path:'searchplate',
      component: () => import('@/views/dashboardchildren/searchByPlate.vue')
    },
    {
      path:'bolo',
      component: () => import('@/views/dashboardchildren/bolo.vue')
    },
    {
      path:'call-log',
      component: () => import('@/views/dashboardchildren/call-log.vue')
    }]
  },
  { path: "*", component: () => import("@/views/404.vue") }
]

const router = new VueRouter({
  routes
})

export default router
