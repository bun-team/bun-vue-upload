import Vue from 'vue'
import App from './App.vue'
import BunVueUpload from '../src/index'

console.log('BunVueUpload', BunVueUpload)
Vue.use(BunVueUpload.install)

export default new Vue({
  el: '#app',
  render: h => h(App)
})