# Checkbox
Checkbox 组件

## 引入
```bash
import 'myadd-ui/dist/css/index.css';
import { Checkbox } from 'myadd-ui';
Vue.use(Checkbox);
```


## 示例
### 单个选中
<br /><m-checkbox label="篮球" :value="'篮球'">篮球</m-checkbox>
```html
<m-checkbox label="篮球" v-model="checked">篮球</m-checkbox>
```

```js
export default {
  data(){
    return {
      checked: true
    }
  }
}
```

### 多个选中
<br /><m-checkbox label="篮球" :value="['篮球','排球']">篮球</m-checkbox>
<m-checkbox label="足球" :value="['篮球','排球']">足球</m-checkbox>
<m-checkbox label="排球" :value="['篮球','排球']">排球</m-checkbox>
```html
<m-checkbox label="篮球" v-model="hobby">篮球</m-checkbox>
<m-checkbox label="足球" v-model="hobby">足球</m-checkbox>
<m-checkbox label="排球" v-model="hobby">排球</m-checkbox>
```

```js
export default {
  data(){
    return {
      hobby: ['篮球','足球']
    }
  }
}
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| value/**v-model** | 绑定值 | Boolean/Array | true | - |
| lable | 绑定状态，点击lable也可以实现点击切换 | String | false | - |