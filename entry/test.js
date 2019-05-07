import testVue from '../component/test-vue/test-vue.vue';
import Vue from 'vue';
import '../common/common.css';
import '../asset/iconfont/iconfont.css';
import store from '../store/store';

new Vue({
    el: '#root',
    store,
    components: {
        'test-vue': testVue,
    }
})