import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem, Input } from 'element-ui'
// 导入弹框提示
import { Message } from 'element-ui'
import { Container, Header, Aside, Main, Menu, Submenu, MenuItem, breadcrumb } from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(breadcrumb)
Vue.prototype.$message = Message // 挂载到Vue实例的prototype上，实现全局挂载
