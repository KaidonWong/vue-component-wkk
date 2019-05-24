import testVue from '../component/test-vue/test-vue.vue';
import Vue from 'vue';
import '../common/common.css';
import '../asset/iconfont/iconfont.css';
import store from '../store/store';
import initMobileEvent from "../common/vue-mobile-event.js";

initMobileEvent();

new Vue({
    el: '#root',
    store,
    components: {
        'test-vue': testVue,
    }
})