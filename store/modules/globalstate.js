// root state object.
// each Vuex instance is just a single state tree.
const state = {
    windowWidth: 0,
    //true: desktop  false: phone
    mode: false,
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    setWindowWidth(state, payload) {
        state.windowWidth = payload.width;
    },
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    setWindowWidth(context, payload) {
        context.commit('setWindowWidth', payload);
    },
}

// getters are functions
const getters = {
    getWindowWidth: (state) => {
        let ret = state.windowWidth;
        return ret;
    },
    //true: desktop  false: phone
    getMode: (state) => {
        if(state.windowWidth <= 900) {
            return false;
        }
        return true;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}