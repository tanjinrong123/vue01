import Vue from 'vue'
import VueRouter from 'vue-router'
//�������ԣ��ֶ���װ
Vue.use(VueRouter)

//����mint-ui
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
//����mui
import './lib/mui/css/mui.css'
//�������
import App from './app.vue'

//����·���Զ���ģ��
import router from './router.js'

var vm=new Vue({
        el:'#app',
        data:{
            msg:'����'
        },
        render:c => c(App),
    //render���elָ��div�����Ķ���ȫ�����ǣ����Բ��ܰ�router-viewռλ���ŵ�index.html��div�У����Է���app.vue�ļ���
    router
})
