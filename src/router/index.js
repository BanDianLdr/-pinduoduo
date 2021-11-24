import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/about/att_flow',
    name:'about/att_flow',
    component:()=>import('@/views/att/att_flow')
  },
  {
    path:'/about/att_ask',
    name:'about/att_ask',
    component:()=>import('@/views/att/att_ask')
  },
  {
    path:'/about/att_faq',
    name:'about/att_faq',
    component:()=>import('@/views/att/att_faq')
  },
  {
    path:'/about/att_brand',
    name:'about/att_brand',
    component:()=>import('@/views/att/att_brand')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
