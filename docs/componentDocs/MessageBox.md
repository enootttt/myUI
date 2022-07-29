# MessageBox
MessageBox 组件

## 引入
```bash
import 'myadd-ui/dist/css/index.css';
import { MessageBox } from 'myadd-ui';
Vue.use(MessageBox);
```

## 示例
### 使用方式
**配合 button 按钮使用，API 调用**
```html
<m-button type="primary" @click="showMessageBox">点击我</m-button>
```
```js
export default {
  methods: {
    showMessageBox() {
      this.$confirm({
        title: '我是标题',
        content: '我是内容',
        onOk: () => {
          // 点击取消按钮
          alert('onOk')
        },
        onCancel: () => {
          // 点击确定按钮
          alert('onCancel')
        }
      })
    }
  }
}
```

### Props
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| title | 头部标题 | String | false | - |
| content | 内容区域 | String | false | - |

### API
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- | ---- | -------- | ------ |
| type | 调用API时使用，传递 cancel 展示取消按钮 | String | false | $confirm |

### Events (事件内回调)
| 参数 | 说明 | 回调参数 |
| ---- | ---- | ------ |
| onOk | 点击取消按钮时调用 | event: Event |
| onCancel | 点击确定按钮时调用 | event: Event |