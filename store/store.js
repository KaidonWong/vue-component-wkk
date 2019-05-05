import Vue from "vue";
import Vuex from "vuex";
import collapse from "./modules/collapse";
import globalstate from "./modules/globalstate";
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		collapse,
		globalstate
	}
});
