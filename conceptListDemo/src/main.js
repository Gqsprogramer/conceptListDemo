import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

// 注册组件
const app=createApp(App)
app.use(Antd)
app.mount('#app')
