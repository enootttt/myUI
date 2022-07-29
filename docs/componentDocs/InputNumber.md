# InputNumber
InputNumber 计数器 组件

## 引入
```bash
import 'myadd-ui/dist/css/index.css';
import { InputNumber } from 'myadd-ui';
Vue.use(InputNumber);
```

## 示例
### 基础样式
<br /><m-inputnumber></m-inputnumber><br />

```html
<m-inputnumber></m-inputnumber>
```

### 禁用状态
<br /><m-inputnumber disabled></m-inputnumber><br />
可以通过设置 disabled 属性来确定是否禁用
```html
<m-inputnumber disabled></m-inputnumber>
```

### Props
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| value / v-model | 绑定值 | Number | true | - |
| step | 步长，用来指定每次加多少 | Number | false | 1 |
| max | 最大值 | Number | true | - |
| min | 最小值 | Number | false | - |
| precision | 精度，精确到小数点后几位 | Number | false | - |
| disabled | 是否禁用 | Boolean | false | false |