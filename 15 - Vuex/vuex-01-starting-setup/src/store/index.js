import Vuex from 'vuex'
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'
import counterStore from './modules/counter/index'

const store = new Vuex.Store({
    modules: {
        numbers: counterStore
    },
    state() {
        return {
            isLogged: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
})

export default store