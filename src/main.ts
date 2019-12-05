import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import Bus from './lib/bus/types'
import "./mock"

Vue.use(Bus)

Vue.use(ViewUI)

Vue.config.productionTip = false

declare module 'vue/types/vue' {
  interface Vue {
    $message: any; // 不声明无法使用this.$message
  }
}

Vue.prototype.$message = "Hello Garyhu"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
