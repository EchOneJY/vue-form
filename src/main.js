import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入公共样式
import './assets/style/reset.css'
import './assets/style/common.scss'

//按需引入element
import './config/element'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
