# vue-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 2022年2月21日 学习笔记
# 1. Element-Plus 使用方法
一、完整引入
1. 安装组件库 npm install element-plus --save
2. 如果使用到icon 图标，需要安装之后再引入 npm install @element-plus/icons-vue --save
3. 在main.js中配置如下: 
``` 
// main.js 
// Element Plus
import 'element-plus/dist/index.css'  // 引入 ElementPlus 组件样式
// 图标和组件需要分开引入
import ElementPlus from 'element-plus';   // 引入 ElementPlus 组件
import { Edit } from '@element-plus/icons-vue'  // 按需引入 Icon 图标 
// 引入组件要使用的语言（示例是中文）
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

// 全局注册 Icon 图标
app.component('Edit', Edit)

app.use(ElementPlus, { locale: zhCn })  // 全局挂载 ElementPlus
app.mount('#app')

```