import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//局部引入
import { globalRegister } from './global'

//全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

//引入axios
import './service/axios_demo'

const app = createApp(App)
app.use(router)
app.use(store)

//样式挂载
app.use(globalRegister)
// app.use(ElementPlus)

app.mount('#app')
