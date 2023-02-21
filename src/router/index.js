import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    
{
  path: '/DisplayData',
  name: 'DisplayData',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/DisplayData.vue')
},
{
  path: '/TopList',
  name: 'TopList',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/TopList.vue')
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

   

    path: '/top10',
    name: 'Top-10',
    component: () => import(/* webpackChunkName: "about" */ '../views/Top10.vue')
  },
  {
    path: '/compare',
    name: 'Jämför',
    component: () => import(/* webpackChunkName: "about" */ '../views/Compare.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


