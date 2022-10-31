import Vue from 'vue'
import App from './App.vue'

import './assets/style/base.css'
import './assets/style/index.scss'

import router from './router/index.js'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	axios,
  render: h => h(App),
}).$mount('#app')
