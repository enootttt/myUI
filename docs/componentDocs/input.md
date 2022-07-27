# Input
Input组件

## 示例
### 类型
<br />通过设置 type 属性可以改变文本框的类型
```html
<input placeholder="请输入内容" type="textarea" /><br />
```

### 禁用状态
<input placeholder="请输入内容" disabled  /><br />
<br />可以通过设置 disabled 来禁用输入框
```html
<input placeholder="请输入内容" disabled  />
```

### 可清空输入框
<input placeholder="请输入内容" clearable /><br />
<br />可以通过设置 disabled 来禁用输入框
```html
<input placeholder="请输入内容" clearable />
```

### 居中显示文字
<input placeholder="请输入内容" clearable center /><br />
<br />调用 center 属性可以居中显示文字
```html
<input placeholder="请输入内容" center />
```


### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| type | 类型，可选值有 textarea | String | false | text |
| value / v-model | 绑定值 | string / number | false | - |
| clearable | 是否可清空 | Boolean | false | false |
| disabled | 是否禁用 | Boolean | false | false |
| center | 文字是否居中显示文字 | Boolean | false | false |
