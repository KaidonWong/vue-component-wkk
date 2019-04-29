// root state object.
// each Vuex instance is just a single state tree.
const state = {
    collapseToggleArr: [],
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    addCollapseToggle(state, payload) {
        state.collapseToggleArr.push(payload.name);
    },
    removeCollapseToggle(state, payload) {
        for(let i = 0,len = state.collapseToggleArr.length;i<len;i++) {
            if(state.collapseToggleArr[i] == payload.name) {
                state.collapseToggleArr.splice(i,1);
            }
        }
    },
    soloCollapseToggle(state, payload) {
        state.collapseToggleArr.splice(0,state.collapseToggleArr.length);
        state.collapseToggleArr.push(payload.name);
    }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    addCollapseToggle(context, payload) {
        context.commit('addCollapseToggle', payload);
    },
    removeCollapseToggle(context, payload) {
        context.commit('removeCollapseToggle', payload);
    },
    soloCollapseToggle(context, payload) {
        context.commit('soloCollapseToggle', payload);
    },
}

// getters are functions
const getters = {
    getCollapseState: (state) => (name) => {
        for(let i = 0,len = state.collapseToggleArr.length;i<len;i++) {
            if(state.collapseToggleArr[i] == name) {
                return true;
            }
        }
        return false;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}