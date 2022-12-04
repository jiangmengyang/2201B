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
   // 添加
   add(state, obj){
    state.list.push(obj) 
  },
  // 已完成修改
  edit(state, obj){
    state.list[obj.index] = obj 
  },
  // 未完成修改
  edit2(state, value){
    state.list[value.index] = value
  }
  },
  actions: {},
  modules: {}
})