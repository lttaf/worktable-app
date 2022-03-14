import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from '~/default-board'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const board = defaultBoard

export default () => new Vuex.Store({
    state: {
      board
    },
    getters,
    actions,
    mutations
  })