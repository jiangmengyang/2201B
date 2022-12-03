import Vue from 'vue'
import Vuex from 'vuex'
import Vuexp from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [Vuexp()],
  state: {
    list: []
  },
  getters: {},
  mutations: {
    addtodo(state, obj) {
      console.log(obj);
      state.list.push(obj)
    }
  },
  actions: {},
  modules: {}
})