import { createStore } from 'vuex'

export default createStore({
  state: {
    mixtures: [
      { variant: 'red', amount: 20 },
      { variant: 'green', amount: 70 },
      { variant: 'blue', amount: 40 }
    ],
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ]
  },
  getters: {
    getMixtures: state => state.mixtures,
    RGBColors (state) {
      return state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`)
    },
    ColorsAmount (state) {
      return state.colors.length
    }
  },
  actions: {
    updateAmount ({ commit }, payload) {
      commit('UPDATE_AMOUNT', payload)
    },
    resetMixtures ({ commit }) {
      commit('RESET_MIXTURES')
    },
    addColor ({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map(item => Math.floor(item.amount * 2.5))
        commit('ADD_COLOR', { red, green, blue })
      }
    }
  },
  mutations: {
    ADD_COLOR (state, color) {
      state.colors.push(color)
    },
    REMOVE_COLOR (state, index) {
      state.colors.splice(index, 1)
    },
    UPDATE_AMOUNT (state, { index, amount }) {
      const mixture = state.mixtures[index]
      if (mixture) {
        mixture.amount = Math.min(100, Math.max(0, amount))
      }
    },
    RESET_MIXTURES (state) {
      state.mixtures = state.mixtures.map(item => ({ ...item, amount: 50 }))
    }
  }
})
