import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ID: "1123"
  },
  mutations: {
    updateID(state,id) {
      state.ID = id
    }
  },
  actions: {},
  modules: {}
})
