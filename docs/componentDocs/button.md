# Button
Button 组件

## 示例

### 类型
<br/><m-button type="primary">按钮</m-button>
<m-button type="success">按钮</m-button>
<m-button type="warning">按钮</m-button>
<m-button type="danger">按钮</m-button><br/>
<br/>可以通过设置 type 属性修改 Button 的类型
```html
<m-button type="primary">按钮</m-button>
<m-button type="success">按钮</m-button>
<m-button type="warning">按钮</m-button>
<m-button type="danger">按钮</m-button>
```

### 形状

<br/><m-button type="primary" round>按钮</m-button>
<m-button type="success" round>按钮</m-button>
<m-button type="warning" round>按钮</m-button>
<m-button type="danger" round>按钮</m-button><br/>
<br/>可以通过设置 round 属性控制 Button 是否为圆形
```html
<m-button type="primary" round>按钮</m-button>
<m-button type="success" round>按钮</m-button>
<m-button type="warning" round>按钮</m-button>
<m-button type="danger" round>按钮</m-button>
```

### 禁用状态

<br/><m-button type="primary" disabled>按钮</m-button>
<m-button type="success" disabled>按钮</m-button>
<m-button type="warning" disabled>按钮</m-button>
<m-button type="danger" disabled>按钮</m-button><br/>
<br/>可以通过设置 disabled 属性来控制按钮是否为禁用状态
```html
<m-button type="primary" disabled>按钮</m-button>
<m-button type="success" disabled>按钮</m-button>
<m-button type="warning" disabled>按钮</m-button>
<m-button type="danger" disabled>按钮</m-button>
```


### Props
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| type | 按钮的类型，可选的值有 **primary** **success** **warning** **danger** | String | false | - |
| round | 是否为圆形 | Boolean | false | false |
| disabled | 按钮是否禁用 | Boolean | false | false |
### Events
| 参数 | 说明 | 回调参数 |
| ---- | ---- | ------ |
| click | 点击按钮，且按钮状态不为禁用时触发| event: Event |
### Slots
| 名称 | 说明 |
| ---- | ---- |
| default | 按钮内容 |