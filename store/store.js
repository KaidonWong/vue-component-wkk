import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    count: 0,
    collapseToggleArr: [],
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
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
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    },
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
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',

    getCollapseState: (state) => (name) => {
        for(let i = 0,len = state.collapseToggleArr.length;i<len;i++) {
            if(state.collapseToggleArr[i] == name) {
                return true;
            }
        }
        return false;
    }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
