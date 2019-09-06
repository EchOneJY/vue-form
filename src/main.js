import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//按需引入element
import './config/element'

//引入样式
import './assets/style/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
