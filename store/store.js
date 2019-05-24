import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import VueAxios from "vue-axios";

import collapse from "./modules/collapse";
import globalstate from "./modules/globalstate";
import table from "./modules/table";

import router from "../router/router.js";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

var store = new Vuex.Store({
	modules: {
		collapse,
		globalstate,
		table
	}
});

axios.defaults.baseURL = 'http://192.168.1.20:8082';
axios.defaults.withCredentials = true
// http request 拦截器
axios.interceptors.request.use(
	config => {
		let user = store.getters["globalstate/getCurrentUser"];
		if (user != null) {
			// 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers.token = user.token;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);
// http response 拦截器
axios.interceptors.response.use(
	(response) => {
        if(response.data.code == 402) {
            router.push({ path: '/login' });
        }
		return response;
	}
);

export default store;
