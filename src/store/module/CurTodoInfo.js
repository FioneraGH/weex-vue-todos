export default {
  namespaced: true,
  state: {
    name: 'name',
    active: true,
    done: true
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload.name
    },
    updateActive(state, payload) {
      state.active = payload.active
    },
    updateDone(state, payload) {
      state.done = payload.done
    }
  },
  actions: {
    updateName({ commit }, name) {
      commit('updateName', { name })
    },
    updateActive({ commit }, active) {
      commit('updateActive', { active })
    },
    updateDone({ commit }, done) {
      commit('updateDone', { done })
    }
  }
}
