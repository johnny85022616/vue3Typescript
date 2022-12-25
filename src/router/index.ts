import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/typeAssertions',
    name: 'typeAssertions ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "interface" */ '../views/type/typeAssertions.vue')
  },
  {
    path: '/interface',
    name: 'interface ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "interface" */ '../views/interface/interface.vue')
  },
  {
    path: '/genericInterfaces',
    name: 'genericInterfaces ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "genericInterfaces" */ '../views/generics/genericInterfaces.vue')
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
    component: () => import(/* webpackChunkName: "functionOverloadings" */ '../views/function/functionOverloadings.vue')
  },
  {
    path: '/generics',
    name: 'generics ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "generics" */ '../views/generics/generics.vue')
  },
  {
    path: '/genericInterfaces',
    name: 'genericInterfaces ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "genericInterfaces" */ '../views/generics/genericInterfaces.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
