# Input
Input组件

## 引入
```bash
import 'myadd-ui/dist/css/index.css';
import { Input } from 'myadd-ui';
Vue.use(Input);
```

## 示例
### 文本域
<br /><m-input placeholder="请输入内容" type="textarea" /><br />
<br />通过设置 type 属性可以改变文本框的类型
```html
<m-input placeholder="请输入内容" type="textarea" />
```

### 禁用状态
<br /><m-input placeholder="请输入内容" disabled  /><br />
<br />可以通过设置 disabled 来禁用输入框
```html
<input placeholder="请输入内容" disabled  />
```

### 可清空输入框
<br /><m-input placeholder="请输入姓名" :value="'请输入姓名'" clearable></m-input><br />
<br />可以通过设置 disabled 来禁用输入框
```html
<m-input placeholder="请输入内容" clearable />
```

### 居中显示文字
<br /><m-input placeholder="请输入内容" center /><br />
<br />调用 center 属性可以居中显示文字
```html
<input placeholder="请输入内容" center />
```

### 复合型输入框
<br /><m-input placeholder="请输入内容">
  <div slot="prepend">https://</div>
</m-input>
<div></div>
<m-input placeholder="请输入内容">
  <div slot="append">.com</div>
</m-input>
<div><br /></div>
<m-input placeholder="请输入内容">
  <div slot="prepend">https://</div>
  <div slot="append">.com</div>
</m-input><br />
```html
<m-input placeholder="请输入内容">
  <div slot="prepend">https://</div>
</m-input>

<m-input placeholder="请输入内容">
  <div slot="append">.com</div>
</m-input>

<m-input placeholder="请输入内容">
  <div slot="prepend">https://</div>
  <div slot="append">.com</div>
</m-input>
```


### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| type | 类型，可选值有 textarea | String | false | text |
| value / v-model | 绑定值 | string / number | false | - |
| clearable | 是否可清空 | Boolean | false | false |
| disabled | 是否禁用 | Boolean | false | false |
| center | 文字是否居中显示文字 | Boolean | false | false |

### Slots
| name | 说明 |
| ---- | ---- |
| prepend | 输入框前置内容，只对 type="text" 有效 |
| append | 输入框后置内容，只对 type="text" 有效 |