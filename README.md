# my-ui 组件库

### 快速开始

#### 1.安装组件库

```bash
npm i my-ui
```

#### 2.引用组件库
```javascript
// 全部引入
import 'my-ui/dist/css/index.css';
import MUI from 'my-ui'
Vue.use(MUI)

// 按需引用
import 'my-ui/dist/css/demo.css'
import { Demo } from 'my-ui';
Vue.use(Demo)
```