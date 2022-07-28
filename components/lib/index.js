import Demo from './demo'
import Card from './card'
import Button from './button'
import Input from './input'
import InputNumber from './input-number'
import Radio from './radio'
import RadioGroup from './radio-group'
import Checkbox from './checkbox'

const components = {
  Demo,
  Card,
  Button,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Checkbox
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