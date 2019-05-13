// root state object.
// each Vuex instance is just a single state tree.
const state = {
	windowWidth: 0,
	//true: desktop  false: phone
	mode: false,
	token: window.localStorage.getItem("tyd_authorize_project_token"),
	currentSection: [
		{ active: false },
		{ active: false },
		{ active: false },
		{ active: false },
		{ active: false },
		{ active: false }
	]
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
	setWindowWidth(state, payload) {
		state.windowWidth = payload.width;
	},
	setToken(state, payload) {
		state.token = payload.token;
		window.localStorage.setItem("tyd_authorize_project_token", payload.token);
	},
	setCurrentSection(state, payload) {
		state.currentSection = [
			{ active: false },
			{ active: false },
			{ active: false },
			{ active: false },
			{ active: false },
			{ active: false }
		];
		switch (payload.currentSection) {
			case "sjtj":
				state.currentSection[0] = { active: true };
				break;
			case "xmgl":
				state.currentSection[1] = { active: true };
				break;
			case "yhgl":
				state.currentSection[2] = { active: true };
				break;
			case "qxfp":
				state.currentSection[3] = { active: true };
				break;
			case "sqls":
				state.currentSection[4] = { active: true };
				break;
			case "czrz":
				state.currentSection[5] = { active: true };
				break;
		}
	}
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
	setWindowWidth(context, payload) {
		context.commit("setWindowWidth", payload);
	},
	setToken(context, payload) {
		context.commit("setToken", payload);
	},
	setCurrentSection(context, payload) {
		context.commit("setCurrentSection", payload);
	}
};

// getters are functions
const getters = {
	getWindowWidth: state => {
		let ret = state.windowWidth;
		return ret;
	},
	//true: desktop  false: phone
	getMode: state => {
		if (state.windowWidth <= 900) {
			return false;
		}
		return true;
	},
	getToken: state => {
		let ret = state.token;
		return ret;
	},
	getCurrentSection: state => {
		let ret = state.currentSection;
		return ret;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
