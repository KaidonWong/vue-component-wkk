import testVue from '../component/test-vue/test-vue.vue';
import Vue from 'vue';
import '../css/common.css';
import '../asset/iconfont/iconfont.css';

new Vue({
    el: '#root',
    components: {
        'test-vue': testVue,
    }
})

