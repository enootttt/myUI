# Tag
Tag 组件

## 引入
```bash
import 'myadd-ui/dist/css/index.css';
import { Tag } from 'myadd-ui';
Vue.use(Tag);
```

## 示例

### 类型
<br/><m-tag type="primary">按钮</m-tag>
<m-tag type="success">按钮</m-tag>
<m-tag type="info">按钮</m-tag>
<m-tag type="warning">按钮</m-tag>
<m-tag type="danger">按钮</m-tag><br/>
```html
<m-tag type="primary">按钮</m-tag>
<m-tag type="success">按钮</m-tag>
<m-tag type="info">按钮</m-tag>
<m-tag type="warning">按钮</m-tag>
<m-tag type="danger">按钮</m-tag>
```

### 可移除的标签
<br/><m-tag type="primary" close>按钮</m-tag>
<m-tag type="success" close>按钮</m-tag>
<m-tag type="info" close>按钮</m-tag>
<m-tag type="warning" close>按钮</m-tag>
<m-tag type="danger" close>按钮</m-tag><br/>
```html
<m-tag type="primary" close>按钮</m-tag>
<m-tag type="success" close>按钮</m-tag>
<m-tag type="info" close>按钮</m-tag>
<m-tag type="warning" close>按钮</m-tag>
<m-tag type="danger" close>按钮</m-tag>
```

### Attributes
| 参数 | 说明 | 类型 | 可选项 | 是否必要 | 默认值 |
| ---- | ---- | ---- | ------- | -------- | ------ |
| type | 类型 | String | `primary` `success` `info` `warning` `danger` | false | false |
| close | 是否显示关闭按钮 | —— | false | false |

### Events
| 参数 | 说明 | 回调参数 |
| ---- | ---- | ------ |
| click | 点击标签上的关闭按钮时触发 | event: Event |