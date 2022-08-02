import Vue from 'vue'
import App from './App.vue'

// import 'myadd-ui/dist/css/index.css';
// import MUI from 'myadd-ui'
// Vue.use(MUI)
import '../components/css/index.scss'
import Input from '../components/lib/input/index'
import InputNumber from '../components/lib/input-number/index'
import Radio from '../components/lib/radio/index'
import RadioGroup from '../components/lib/radio-group/index'
import Checkbox from '../components/lib/checkbox/index'
import Button from '../components/lib/button/index'
Vue.use(Input).use(InputNumber).use(Radio).use(RadioGroup).use(Checkbox).use(Button)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
