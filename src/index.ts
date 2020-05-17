import BunUpload from './BunUpload/index'

const BunVueUpload = {
  install(Vue) {
    Vue.use(BunUpload)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  BunVueUpload.install(window.Vue)
}

export default BunVueUpload