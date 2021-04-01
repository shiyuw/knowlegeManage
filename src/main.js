import Vue from 'vue'
import App from './App.vue'
import useElement from './element-views'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/style.css'
useElement();
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
