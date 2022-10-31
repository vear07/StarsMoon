import Vue from 'vue'
import App from './App.vue'

import './assets/style/base.css'
import './assets/style/index.scss'

import router from './router/index.js'
import store from './store'
import axios from 'axios'

import dataType from '@/utils/dataType'
Object.keys(dataType).forEach(key => {
  Vue.prototype[key] = dataType[key]
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	axios,
  render: h => h(App),
}).$mount('#app')
