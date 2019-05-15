import Vue from "vue";
import "../common/common.css";
import "../asset/iconfont/iconfont.css";
import store from "../store/store";
import router from "../router/router";
import echarts from "echarts";

import structureVue from "../component-proj/structure-vue/structure-vue.vue";
import Message from "../iview-src/components/message"

Vue.prototype.$echarts = echarts;
Vue.prototype.$Message = Message;
new Vue({
	el: "#root",
	store,
	router,
	components: {
		"structure-vue": structureVue
	}
});
