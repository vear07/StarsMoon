import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/views/layout/index.vue'

import home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  redirect: '/home',
	  name: 'layout',
	  component: layout,
	  children: [
	    {
	      path: 'home',
	      name: 'home',
	      component: home
	    }
	  ]
	}
]

const router = new VueRouter({
  routes
})

export default router