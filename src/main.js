import Vue from 'vue'
import App from './App.vue'

import './assets/style/base.css'
import './assets/style/index.scss'

import router from './router/index.js'
import store from './store'
import axios from 'axios'

import {
  Radio,
  Checkbox,
	Select,
  DatePicker,
	Form,
	FormItem,
	Table,
  Loading,
	Message,
	Popover
} from 'element-ui'
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Table)
Vue.use(Popover)
// 加载动画引入
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
// message不能使用Vue.use，否则运行时会自动弹出一个空信息弹窗
Vue.prototype.$message = Message

import dataType from '@/utils/dataType'
Object.keys(dataType).forEach(key => {
  Vue.prototype[key] = dataType[key]
})

import messageDialog from '@/components/messageDialog/index'
Vue.use(messageDialog)

import myInput from '@/components/myInput/index'
Vue.use(myInput)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	axios,
  render: h => h(App),
}).$mount('#app')
