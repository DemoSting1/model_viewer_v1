/*
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-27 21:40:46
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-03-28 13:18:27
 * @FilePath: \model_viewer_v1\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
