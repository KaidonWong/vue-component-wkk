import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import VueAxios from "vue-axios";

import collapse from "./modules/collapse";
import globalstate from "./modules/globalstate";
import table from "./modules/table";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

var store = new Vuex.Store({
	modules: {
		collapse,
		globalstate,
		table
	}
});

// http request 拦截器
axios.interceptors.request.use(
	config => {
        let token = store.getters["globalstate/getToken"];
		if (token != null) {
			// 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers.token = token;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

export default store;
