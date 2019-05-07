import Vue from "vue";
import "../common/common.css";
import "../asset/iconfont/iconfont.css";
import store from "../store/store";
import router from "../router/router";

import structureVue from "../component-proj/structure-vue/structure-vue.vue";

new Vue({
	el: "#root",
    store,
    router,
	components: {
		"structure-vue": structureVue
	}
});
