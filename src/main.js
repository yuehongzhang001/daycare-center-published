import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/style/site.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
