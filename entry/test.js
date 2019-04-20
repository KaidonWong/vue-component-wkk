import testVue from '../component/test-vue/test-vue.vue';
import Vue from 'vue';

new Vue({
    el: '#root',
    components: {
        'test-vue': testVue,
    }
})

