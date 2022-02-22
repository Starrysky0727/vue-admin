import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// Element Plus
import ElementPlus from 'element-plus';   // 引入 ElementPlus 组件
import 'element-plus/dist/index.css'  // 引入 ElementPlus 组件样式
// 引入组件要使用的语言（示例是中文）
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)

// app.component('Edit', Edit)
app.use(ElementPlus, { locale: zhCn })  // 全局挂载 Element-Plus
app.use(router)
app.mount('#app')
