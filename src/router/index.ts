import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/function',
    name: 'function ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "function" */ '../views/function/functionView.vue')
  },
  {
    path: '/optionalParameters',
    name: 'optionalParameters ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "optionalParameters" */ '../views/function/optionalParameters.vue')
  },
  {
    path: '/defaultParameters',
    name: 'defaultParameters ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "defaultParameters" */ '../views/function/defaultParameters.vue')
  },
  {
    path: '/restParameters',
    name: 'restParameters ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "restParameters" */ '../views/function/restParameters.vue')
  },
  {
    path: '/functionOverloadings',
    name: 'functionOverloadings ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "restParameters" */ '../views/function/functionOverloadings.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
