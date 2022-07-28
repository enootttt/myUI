# Radio
Radio 组件

## 引入
```bash
import 'myadd-ui/dist/css/index.css';
import { Radio } from 'myadd-ui';
Vue.use(Radio);
```


## 示例
<br /><m-radio label="男" :value="'男'">男</m-radio>
<m-radio label="女">女</m-radio>
```html
<m-radio label="男" v-model="sex">男</m-radio>
<m-radio label="女" v-model="sex">女</m-radio>
```

```js
export default {
  data(){
    return {
      sex: '男'
    }
  }
}
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| value/**v-model** | 绑定值 | Number/String | true | - |
| lable | 绑定状态，点击lable也可以实现点击切换 | Number / String | false | - |