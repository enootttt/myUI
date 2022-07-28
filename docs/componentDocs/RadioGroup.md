# RadioGroup
RadioGroup 组件

## 引入
```bash
import 'myadd-ui/dist/css/index.css';
import { RadioGroup } from 'myadd-ui';
Vue.use(RadioGroup);
```


## 示例
<br /><m-radio label="男" :value="'男'">男</m-radio>
<m-radio label="女">女</m-radio>
```html
<m-radio-group v-model="group_sex">
  <m-radio label="男">男</m-radio>
  <m-radio label="女">女</m-radio>
</m-radio-group>
```

```js
export default {
  data(){
    return {
      group_sex: '男'
    }
  }
}
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| value/**v-model** | 绑定值 | Number/String | true | - |