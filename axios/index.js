import Vue from "vue";
import router from "../router/router";
import store from "../store/store";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
axios.defaults.baseURL = "http://192.168.1.17:8082";
axios.defaults.withCredentials = true;
// http request 拦截器

// function repquestInterceptor(config) {
//     let user = store.getters["globalstate/getCurrentUser"];
//     if (user != null) {
//         // 判断是否存在token，如果存在的话，则每个http header都加上token
//         config.headers.token = user.token;
//     }
//     return config;
// }

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

// axios.interceptors.request.use(
// 	repquestInterceptor,
// 	err => {
// 		return Promise.reject(err);
// 	}
// );
// http response 拦截器
axios.interceptors.response.use(response => {
	if (response.data.code == 402) {
		router.push({ path: "/login" });
	}
	return response;
});

//export default function() {}
