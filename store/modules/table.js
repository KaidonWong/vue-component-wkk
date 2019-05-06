// root state object.
// each Vuex instance is just a single state tree.
const state = {
    selectedArr: [],
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    add(state, payload) {
        state.selectedArr.splice(0,0,...payload.ids);
    },
    remove(state, payload) {
        for(let i = 0,len = state.selectedArr.length;i<len;i++) {
            if(state.selectedArr[i] == payload.id) {
                state.selectedArr.splice(i,1);
                return;
            }
        }
    },
    removeAll(state) {
        state.selectedArr.splice(0,state.selectedArr.length);
    }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    add(context, payload) {
        context.commit('add', payload);
    },
    remove(context, payload) {
        context.commit('remove', payload);
    },
    removeAll(context) {
        context.commit('removeAll');
    },
}

// getters are functions
const getters = {
    getSelected: (state) => {
        return state.selectedArr;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}