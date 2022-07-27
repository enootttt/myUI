import Demo from './demo'
import Card from './card'
import Button from './button'
import Input from './input'
import InputNumber from './input-number'

const components = {
  Demo,
  Card,
  Button,
  Input,
  InputNumber
}

const install = function (Vue) {
  if(install.installed) return  // 避免重复安装
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install
}

export default API