# 快速开始

#### 安装组件库

```bash
npm i myadd-ui
```

#### 引用组件库
> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'myadd-ui/dist/css/index.css';
import MUI from 'myadd-ui';
Vue.use(MUI);

// 按需引入
import 'myadd-ui/dist/css/demo-css';
import { Demo } from 'myadd-ui';
Vue.use(Demo);
```