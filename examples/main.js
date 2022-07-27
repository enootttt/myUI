import Vue from 'vue'
import App from './App.vue'

// import 'myadd-ui/dist/css/index.css';
// import MUI from 'myadd-ui'
// Vue.use(MUI)
import '../components/css/index.scss'
import Input from '../components/lib/input/index'
import InputNumber from '../components/lib/input-number/index'
Vue.use(Input).use(InputNumber)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
