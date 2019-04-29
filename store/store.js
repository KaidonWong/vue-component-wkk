import Vue from 'vue'
import Vuex from 'vuex'
import collapse from './modules/collapse'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        collapse,
    }
})
