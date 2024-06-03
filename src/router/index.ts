import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/typeIntroduction',
    name: 'typeIntroduction ',
    component: () => import(/* webpackChunkName: "interface" */ '../views/type/typeIntroduction.vue')
  },
  {
    path: '/typeAssertions',
    name: 'typeAssertions ',
    component: () => import(/* webpackChunkName: "interface" */ '../views/type/typeAssertions.vue')
  },
  {
    path: '/intersectionTypes',
    name: 'intersectionTypes ',
    component: () => import(/* webpackChunkName: "intersectionTypes" */ '../views/type/intersectionTypes.vue')
  },
  {
    path: '/interface',
    name: 'interface ',
    component: () => import(/* webpackChunkName: "interface" */ '../views/interface/interface.vue')
  },
  {
    path: '/genericInterfaces',
    name: 'genericInterfaces ',
    component: () => import(/* webpackChunkName: "genericInterfaces" */ '../views/generics/genericInterfaces.vue')
  },
  {
    path: '/function',
    name: 'function ',
    component: () => import(/* webpackChunkName: "function" */ '../views/function/functionView.vue')
  },
  {
    path: '/optionalParameters',
    name: 'optionalParameters ',
    component: () => import(/* webpackChunkName: "optionalParameters" */ '../views/function/optionalParameters.vue')
  },
  {
    path: '/defaultParameters',
    name: 'defaultParameters ',
    component: () => import(/* webpackChunkName: "defaultParameters" */ '../views/function/defaultParameters.vue')
  },
  {
    path: '/restParameters',
    name: 'restParameters ',
    component: () => import(/* webpackChunkName: "restParameters" */ '../views/function/restParameters.vue')
  },
  {
    path: '/functionOverloadings',
    name: 'functionOverloadings ',
    component: () => import(/* webpackChunkName: "functionOverloadings" */ '../views/function/functionOverloadings.vue')
  },
  {
    path: '/generics',
    name: 'generics ',
    component: () => import(/* webpackChunkName: "generics" */ '../views/generics/generics.vue')
  },
  {
    path: '/genericInterfaces',
    name: 'genericInterfaces ',
    component: () => import(/* webpackChunkName: "genericInterfaces" */ '../views/generics/genericInterfaces.vue')
  },
  {
    path: '/genericConstraints',
    name: 'genericConstraints ',
    component: () => import(/* webpackChunkName: "genericConstraints" */ '../views/generics/genericConstraints.vue')
  },
  {
    path: '/optionApi',
    name: 'optionApi ',
    component: () => import(/* webpackChunkName: "genericConstraints" */ '../views/optionApi/optionApi.vue')
  },
  {
    path: '/compositionApi',
    name: 'compositionApi ',
    component: () => import(/* webpackChunkName: "compisitionApi" */ '../views/compositionApi/compositionApi.vue')
  },
  {
    path: '/fetchProduct',
    name: 'fetchProduct ',
    component: () => import(/* webpackChunkName: "fetchProduct" */ '../views/compositionApi/fetchProduct.vue')
  },
  {
    path: '/class',
    name: 'class ',
    component: () => import(/* webpackChunkName: "fetchProduct" */ '../views/class/class.vue')
  },
  {
    path: '/polymorphism',
    name: 'polymorphism ',
    component: () => import(/* webpackChunkName: "fetchProduct" */ '../views/class/polymorphism.vue')
  },
  {
    path: '/dataModifiers',
    name: 'dataModifiers ',
    component: () => import(/* webpackChunkName: "fetchProduct" */ '../views/class/dataModifiers.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
