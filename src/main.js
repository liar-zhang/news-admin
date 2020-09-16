import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入axios
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
//把axios绑定到原型
Vue.prototype.$axios = axios
//配置axios的基准路径
axios.defaults.baseURL = "http://localhost:8080"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
