import Vue from 'vue';
import '../css/common.css';
import '../asset/iconfont/iconfont.css';
import store from '../store/store';

import structureVue from '../component-proj/structure-vue/structure-vue.vue';

new Vue({
    el: '#root',
    store,
    components: {
        'structure-vue': structureVue,
    }
})