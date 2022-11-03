import input from './index.vue'
const myInput = {
  install(Vue) {
    Vue.component('myInput', input)
  }
}
export default myInput
