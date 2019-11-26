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
    component: () => import('@/views/dashboard.vue')
  },
  {
    path: '/bolo',
    name: 'bolo',
    component: () => import('@/views/bolo.vue')
  },
  {
    path: '/call-log',
    name: 'calls',
    component: () => import('@/views/call-log.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search.vue'),
    children: [
      {
        path: 'person',
        component: () => import('@/views/searchchildren/person.vue')
      },
      {
        path: 'property',
        component: () => import('@/views/searchchildren/property.vue')
      },
      {
        path: 'vehicle',
        component: () => import('@/views/searchchildren/vehicle.vue')
      }

    ]
  },

  { path: "*", component: () => import("@/views/404.vue") }
]

const router = new VueRouter({
  routes
})

export default router
