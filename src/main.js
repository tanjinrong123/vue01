import Vue from 'vue'
import VueRouter from 'vue-router'
//挂载属性，手动安装
Vue.use(VueRouter)

//导入mint-ui
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
//导入mui
import './lib/mui/css/mui.css'
//导入组件
import App from './app.vue'

//导入路由自定义模块
import router from './router.js'

var vm=new Vue({
        el:'#app',
        data:{
            msg:'哈哈'
        },
        render:c => c(App),
    //render会把el指定div容器的东西全部覆盖，所以不能把router-view占位符放到index.html的div中，所以放在app.vue文件中
    router
})
