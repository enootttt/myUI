import Vue from 'vue'
import App from './App.vue'

import 'myadd-ui/dist/css/index.css';
import MUI from 'myadd-ui'
Vue.use(MUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
